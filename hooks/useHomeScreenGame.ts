import React, { useEffect, useRef, useState } from 'react'
import { useResizeDetector } from 'react-resize-detector'
import SAT from 'sat'

type PlayerPosition = [number, number]
// percentages 0-100
type ItemPosition = [number, number]

const MOVEMENT_SPEED = 20

const getRandomItemPosition = (width: number, height: number): ItemPosition => {
  return [Math.random() * width, Math.random() * height]
}

export default function useHomeScreenGame() {
  const { width, height, ref: playAreaRef } = useResizeDetector()
  const [score, setScore] = useState<number>(0)
  const [isInitialized, setIsInitialized] = useState(false)
  const [playerPosition, setPlayerPosition] = useState<PlayerPosition>([0, 0])
  const [itemPosition, setItemPosition] = useState<ItemPosition>([0, 0])
  const playerRef = useRef() as React.MutableRefObject<HTMLDivElement>

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
        // TODO: persist a high score in localStorage & render next
        // to score in UI
        setScore((score) => (score === null ? 1 : score + 1))
      }
    }

    const handleSetPlayerPosition = (newPosition: PlayerPosition) => {
      let positionToUpdate = newPosition
      if (!isInitialized) {
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
        setIsInitialized(true)
      }
      handleCollision(newPosition)
      setPlayerPosition(positionToUpdate)
    }

    const keyListener = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'w':
          return handleSetPlayerPosition([
            playerPosition[0],
            playerPosition[1] - MOVEMENT_SPEED,
          ])
        case 's':
          return handleSetPlayerPosition([
            playerPosition[0],
            playerPosition[1] + MOVEMENT_SPEED,
          ])
        case 'a':
          return handleSetPlayerPosition([
            playerPosition[0] - MOVEMENT_SPEED,
            playerPosition[1],
          ])
        case 'd':
          return handleSetPlayerPosition([
            playerPosition[0] + MOVEMENT_SPEED,
            playerPosition[1],
          ])
        default:
          return
      }
    }
    document.addEventListener('keydown', keyListener)
    return () => document.removeEventListener('keydown', keyListener)
  }, [height, isInitialized, itemPosition, playAreaRef, playerPosition, width])

  return {
    playAreaRef,
    playAreaWidth: width,
    playAreaHeight: height,
    playerRef,
    score,
    isInitialized,
    playerPosition,
    setPlayerPosition,
    itemPosition,
    setItemPosition,
  }
}
