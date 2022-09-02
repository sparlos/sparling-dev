import React, { useEffect, useRef, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { useResizeDetector } from 'react-resize-detector'
import SAT from 'sat'
import useJoystick from './useJoystick'

type PlayerPosition = [number, number]
type ItemPosition = [number, number]
type Keymap = {
  w: boolean
  a: boolean
  s: boolean
  d: boolean
}

const INITIAL_MOVEMENT_SPEED = 0.25
const MAX_KEYBOARD_MOVEMENT_SPEED = 1
const MAX_JOYSTICK_MOVEMENT_SPEED = 0.35

const getRandomItemPosition = (width: number, height: number): ItemPosition => {
  return [
    Math.max(Math.random(), 0.05) * (width - 20),
    // make sure items do not spawn inside joystick area
    Math.max(Math.random(), 0.05) * (height - 210),
  ]
}

export default function useHomeScreenGame() {
  const { width, height, ref: playAreaRef } = useResizeDetector()
  const [score, setScore] = useState<number>(0)
  const [isPlayerInitialized, setIsPlayerInitialized] = useState(false)
  const [isGameInitialized, setIsGameInitialized] = useState(false)
  const [playerPosition, setPlayerPosition] = useState<PlayerPosition>([0, 0])
  const [itemPosition, setItemPosition] = useState<ItemPosition>([0, 0])
  const playerRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const animationFrameRef = useRef() as React.MutableRefObject<number>
  const [movementSpeed, setMovementSpeed] = useState(INITIAL_MOVEMENT_SPEED)
  const [keymap, setKeymap] = useState<Keymap>({
    w: false,
    a: false,
    s: false,
    d: false,
  })
  const [playerHeading, setPlayerHeading] = useState<null | [number, number]>(
    null
  )
  const [highScore, setHighScore] = useLocalStorage('home-screen-high-score', 0)
  const previousTime = useRef<null | number>(null)
  const { initialize: initializeJoystick, joystickAreaRef } = useJoystick({
    handleMove: (data) => {
      const radians = data.angle.radian
      const xHeading = Math.cos(radians)
      const yHeading = Math.sin(radians) * -1
      setPlayerHeading([xHeading, yHeading])
    },
    handleEnd: () => setPlayerHeading(null),
  })

  const initializePlayer = () => {
    if (width && height) {
      const playerClientRect = playerRef?.current.getBoundingClientRect()
      const playAreaClientRect = playAreaRef?.current.getBoundingClientRect()
      const initialPlayerXPosition =
        playerClientRect.left - playAreaClientRect.left
      const initialPlayerYPosition =
        playerClientRect.top - playAreaClientRect.top

      setPlayerPosition([
        initialPlayerXPosition - 15,
        initialPlayerYPosition - 3,
      ])
      setItemPosition(getRandomItemPosition(width, height))
    }
    setIsPlayerInitialized(true)
  }

  const startGame = () => {
    setIsGameInitialized(true)
    initializeJoystick()
    initializePlayer()
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
        handleSetPlayerPosition([newXPosition, newYPosition])
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
    keymap.a,
    keymap.d,
    keymap.s,
    keymap.w,
    movementSpeed,
    playerHeading,
    playerPosition,
    score,
    setHighScore,
    width,
  ])

  useEffect(() => {
    const handleSetKeymap = (newKeymap: Keymap) => {
      setKeymap(newKeymap)
    }

    const keyDownListener = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'w':
          return handleSetKeymap({
            ...keymap,
            w: true,
          })
        case 'a':
          return handleSetKeymap({
            ...keymap,
            a: true,
          })
        case 's':
          return handleSetKeymap({
            ...keymap,
            s: true,
          })
        case 'd':
          return handleSetKeymap({
            ...keymap,
            d: true,
          })
      }
    }

    const keyUpListener = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'w':
          return setKeymap({
            ...keymap,
            w: false,
          })
        case 'a':
          return setKeymap({
            ...keymap,
            a: false,
          })
        case 's':
          return setKeymap({
            ...keymap,
            s: false,
          })
        case 'd':
          return setKeymap({
            ...keymap,
            d: false,
          })
      }
    }
    document.addEventListener('keydown', keyDownListener)
    document.addEventListener('keyup', keyUpListener)
    return () => {
      document.removeEventListener('keydown', keyDownListener)
      document.removeEventListener('keyup', keyUpListener)
    }
  }, [keymap])

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
