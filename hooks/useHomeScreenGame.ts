import React, { useEffect, useRef, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { useResizeDetector } from 'react-resize-detector'
import SAT from 'sat'
import useJoystick from './useJoystick'
import usePlayer, {
  MAX_JOYSTICK_MOVEMENT_SPEED,
  MAX_KEYBOARD_MOVEMENT_SPEED,
  PlayerPosition,
} from './usePlayer'

type ItemPosition = [number, number]

const getRandomItemPosition = (width: number, height: number): ItemPosition => {
  return [
    Math.round(Math.max(Math.random(), 0.05) * (width - 20)),
    // make sure items do not spawn inside joystick area
    Math.round(Math.max(Math.random(), 0.05) * (height - 210)),
  ]
}

export default function useHomeScreenGame() {
  const { width, height, ref: playAreaRef } = useResizeDetector()
  const [score, setScore] = useState<number>(0)
  const [isGameInitialized, setIsGameInitialized] = useState(false)
  const [itemPosition, setItemPosition] = useState<ItemPosition>([0, 0])
  const animationFrameRef = useRef() as React.MutableRefObject<number>
  const [highScore, setHighScore] = useLocalStorage('home-screen-high-score', 0)
  const previousTime = useRef<null | number>(null)
  const {
    isPlayerInitialized,
    initializePlayer,
    movementSpeed,
    setMovementSpeed,
    playerPosition,
    setPlayerPosition,
    playerHeading,
    setPlayerHeading,
    keymap,
    playerRef,
  } = usePlayer({
    width,
    height,
    playAreaRef,
  })
  const { initialize: initializeJoystick, joystickAreaRef } = useJoystick({
    handleMove: (data) => {
      const radians = data.angle.radian
      const xHeading = Math.cos(radians)
      const yHeading = Math.sin(radians) * -1
      setPlayerHeading([xHeading, yHeading])
    },
    handleEnd: () => setPlayerHeading(null),
  })

  const startGame = () => {
    setIsGameInitialized(true)
    initializeJoystick()
    initializePlayer()
    if (width && height) {
      setItemPosition(getRandomItemPosition(width, height))
    }
  }

  useEffect(() => {
    const handleCollision = (newPlayerPosition: PlayerPosition) => {
      const [playerX, playerY] = newPlayerPosition
      const [itemX, itemY] = itemPosition

      const playerCollision = new SAT.Box(
        new SAT.Vector(playerX, playerY),
        30,
        30
      ).toPolygon()

      const itemCollision = new SAT.Box(
        new SAT.Vector(itemX, itemY - 10),
        35,
        45
      ).toPolygon()

      const collided = SAT.testPolygonPolygon(playerCollision, itemCollision)
      if (collided && width && height) {
        setItemPosition(getRandomItemPosition(width, height))
        const newScore = score + 1
        setScore(newScore)
        setHighScore(Math.max(newScore, highScore))
        const newSpeed = movementSpeed + newScore * 0.001
        setMovementSpeed(Math.min(newSpeed, MAX_KEYBOARD_MOVEMENT_SPEED))
      }
    }

    const handleSetPlayerPosition = (newPosition: PlayerPosition) => {
      handleCollision(newPosition)
      setPlayerPosition(newPosition)
    }

    const renderLoop = (time: number) => {
      const deltaTime = time - (previousTime.current ?? time)
      // normalize movement speed for frame rate independence,
      // make sure joystick movement doesn't get too fast
      const normalizedMovementSpeed =
        (playerHeading
          ? Math.min(movementSpeed, MAX_JOYSTICK_MOVEMENT_SPEED)
          : movementSpeed) * deltaTime
      previousTime.current = time
      animationFrameRef.current = requestAnimationFrame(renderLoop)
      let newXPosition = playerPosition[0]
      let newYPosition = playerPosition[1]
      // joystick is active
      if (playerHeading) {
        newXPosition =
          playerPosition[0] + normalizedMovementSpeed * playerHeading[0]
        newYPosition =
          playerPosition[1] + normalizedMovementSpeed * playerHeading[1]
        // handle keypress movement
      } else {
        if (keymap.w) {
          newYPosition -= normalizedMovementSpeed
        } else if (keymap.s) {
          newYPosition += normalizedMovementSpeed
        }
        if (keymap.a) {
          newXPosition -= normalizedMovementSpeed
        } else if (keymap.d) {
          newXPosition += normalizedMovementSpeed
        }
      }
      if (
        newXPosition !== playerPosition[0] ||
        newYPosition !== playerPosition[1]
      ) {
        if (width && height) {
          if (newXPosition <= -30) {
            newXPosition = 0
          }
          if (newXPosition >= width - 30) {
            newXPosition = width - 30
          }
          if (newYPosition <= -30) {
            newYPosition = -10
          }
          if (newYPosition >= height - 20) {
            newYPosition = height - 30
          }
        }
        handleSetPlayerPosition([
          Math.round(newXPosition),
          Math.round(newYPosition),
        ])
      }
    }
    if (isGameInitialized) {
      animationFrameRef.current = requestAnimationFrame(renderLoop)
    }

    return () => cancelAnimationFrame(animationFrameRef.current)
  }, [
    height,
    highScore,
    isGameInitialized,
    itemPosition,
    keymap,
    movementSpeed,
    playerHeading,
    playerPosition,
    score,
    setHighScore,
    setMovementSpeed,
    setPlayerPosition,
    width,
  ])

  return {
    playAreaRef,
    playAreaWidth: width,
    playAreaHeight: height,
    playerRef,
    score,
    isPlayerInitialized,
    isGameInitialized,
    playerPosition,
    setPlayerPosition,
    itemPosition,
    setItemPosition,
    highScore,
    startGame,
    joystickAreaRef,
  }
}
