import React, { useState, useRef, useEffect } from 'react'

export type PlayerPosition = [number, number]
export type Keymap = {
  w: boolean
  a: boolean
  s: boolean
  d: boolean
}

export const INITIAL_MOVEMENT_SPEED = 0.25
export const MAX_KEYBOARD_MOVEMENT_SPEED = 1
export const MAX_JOYSTICK_MOVEMENT_SPEED = 0.35

type UsePlayerProps = {
  width: number | undefined
  height: number | undefined
  playAreaRef: React.MutableRefObject<HTMLDivElement>
}

export default function usePlayer({
  width,
  height,
  playAreaRef,
}: UsePlayerProps) {
  const [isPlayerInitialized, setIsPlayerInitialized] = useState(false)
  const [playerPosition, setPlayerPosition] = useState<PlayerPosition>([0, 0])
  const playerRef = useRef() as React.MutableRefObject<HTMLDivElement>
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
    }
    setIsPlayerInitialized(true)
  }

  return {
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
  }
}
