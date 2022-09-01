import Link from 'next/link'
import { motion, TargetAndTransition } from 'framer-motion'
import { IconType } from 'react-icons'
import { useState } from 'react'
import { DEFAULT_SPRING_TRANSITION } from '../utils/framer'
import useUIStore, { BackgroundIcon } from '../store/uiStore'

type LinkButtonProps = {
  className?: string
  bgColor?: string
  label: string
  href: string
  Icon?: IconType
  backgroundIcon: BackgroundIcon
}

const BUTTON_ACTIVE_ANIMATION: TargetAndTransition = {
  x: 12,
  y: -12,
}

export default function LinkButton({
  className,
  bgColor = 'bg-sky-400',
  label,
  href,
  Icon,
  backgroundIcon,
}: LinkButtonProps) {
  const [isButtonFocused, setIsButtonFocused] = useState(false)
  const { setBackgroundIcon } = useUIStore()

  const handleFocusButton = (isFocused: boolean) => {
    setBackgroundIcon(isFocused ? backgroundIcon : null)
    setIsButtonFocused(isFocused)
  }

  return (
    <Link href={href}>
      <button
        aria-label={`link to ${label}`}
        onClick={() => setBackgroundIcon(null)}
        onFocus={() => handleFocusButton(true)}
        onBlur={() => handleFocusButton(false)}
        className={'relative h-28 w-32 ' + (className || '')}
      >
        <motion.div
          className="peer relative z-10 flex h-full w-full flex-col items-center rounded bg-white p-4 shadow-md dark:bg-slate-700"
          transition={DEFAULT_SPRING_TRANSITION}
          animate={isButtonFocused ? BUTTON_ACTIVE_ANIMATION : {}}
          onHoverStart={() => handleFocusButton(true)}
          onHoverEnd={() => handleFocusButton(false)}
        >
          <motion.div
            animate={{
              scale: isButtonFocused ? 1.35 : 1,
              x: isButtonFocused ? 2 : 0,
              y: isButtonFocused ? -2 : 0,
              rotate: isButtonFocused ? 15 : 0,
            }}
            transition={DEFAULT_SPRING_TRANSITION}
          >
            {Icon && <Icon className="mb-2 mt-4" />}
          </motion.div>
          <div>{label}</div>
        </motion.div>
        <div
          className={'absolute inset-0 z-0 h-full w-full rounded-md ' + bgColor}
        />
        <div
          className={
            'absolute inset-0 z-0 h-full w-full scale-125 rounded-md p-6 opacity-0 blur transition duration-500 peer-hover:scale-50 dark:opacity-25 ' +
            bgColor
          }
        />
      </button>
    </Link>
  )
}
