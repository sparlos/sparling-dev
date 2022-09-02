import { JoystickManager, JoystickOutputData } from 'nipplejs'
import { useRef } from 'react'

type UseJoystickProps = {
  handleMove: (data: JoystickOutputData) => void
  handleEnd: () => void
}

export default function useJoystick({
  handleMove,
  handleEnd,
}: UseJoystickProps) {
  const joystickRef = useRef<JoystickManager>()

  const initialize = () => {
    const loadJoystick = async () => {
      const joystick = (await import('nipplejs')).default
      const semiJoystick = joystick.create({
        mode: 'semi',
        size: 50,
        catchDistance: 50,
        color: '#38bdf8',
      })

      semiJoystick.on('move', (_, data) => handleMove(data))
      semiJoystick.on('end', () => handleEnd())
      joystickRef.current = semiJoystick
    }
    loadJoystick()

    return () => joystickRef.current?.destroy()
  }

  return { joystickRef, initialize }
}
