import React, { useEffect, useRef, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { useResizeDetector } from 'react-resize-detector'
import SAT from 'sat'

type PlayerPosition = [number, number]
type ItemPosition = [number, number]
type Keymap = {
  w: boolean
  a: boolean
  s: boolean
  d: boolean
}

const INITIAL_MOVEMENT_SPEED = 2
const MAX_MOVEMENT_SPEED = 5

const getRandomItemPosition = (width: number, height: number): ItemPosition => {
  return [Math.random() * width, Math.random() * height]
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
  const [highScore, setHighScore] = useLocalStorage('home-screen-high-score', 0)

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
        const newSpeed = movementSpeed + newScore * 0.01
        setMovementSpeed(Math.min(newSpeed, MAX_MOVEMENT_SPEED))
      }
    }

    const handleSetPlayerPosition = (newPosition: PlayerPosition) => {
      let positionToUpdate = newPosition
      if (!isPlayerInitialized) {
        if (width && height) {
          const playerClientRect = playerRef?.current.getBoundingClientRect()
          const playAreaClientRect =
            playAreaRef?.current.getBoundingClientRect()
          const initialPlayerXPosition =
            playerClientRect.left - playAreaClientRect.left
          const initialPlayerYPosition =
            playerClientRect.top - playAreaClientRect.top

          positionToUpdate[0] += initialPlayerXPosition
          positionToUpdate[1] += initialPlayerYPosition
          setItemPosition(getRandomItemPosition(width, height))
        }
        setIsPlayerInitialized(true)
      }
      handleCollision(newPosition)
      setPlayerPosition(positionToUpdate)
    }

    const renderLoop = (time: number) => {
      console.log(time)
      animationFrameRef.current = requestAnimationFrame(renderLoop)
      let newXPosition = playerPosition[0]
      let newYPosition = playerPosition[1]
      if (keymap.w) {
        newYPosition -= movementSpeed
      } else if (keymap.s) {
        newYPosition += movementSpeed
      }
      if (keymap.a) {
        newXPosition -= movementSpeed
      } else if (keymap.d) {
        newXPosition += movementSpeed
      }
      if (
        newXPosition !== playerPosition[0] ||
        newYPosition !== playerPosition[1]
      ) {
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
    isPlayerInitialized,
    isGameInitialized,
    itemPosition,
    keymap,
    movementSpeed,
    playAreaRef,
    playerPosition,
    score,
    setHighScore,
    width,
  ])

  useEffect(() => {
    const handleSetKeymap = (newKeymap: Keymap) => {
      if (!isGameInitialized) setIsGameInitialized(true)
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
  }, [isGameInitialized, keymap])

  return {
    playAreaRef,
    playAreaWidth: width,
    playAreaHeight: height,
    playerRef,
    score,
    isPlayerInitialized,
    playerPosition,
    setPlayerPosition,
    itemPosition,
    setItemPosition,
    highScore,
  }
}