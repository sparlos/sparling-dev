import Link from 'next/link'
import { motion, TargetAndTransition } from 'framer-motion'
import { IconType } from 'react-icons'
import { useState } from 'react'
import { DEFAULT_SPRING_TRANSITION } from '../utils/framer'

type LinkButtonProps = {
  className?: string
  bgColor?: string
  label: string
  href: string
  Icon?: IconType
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
}: LinkButtonProps) {
  const [isButtonFocused, setIsButtonFocused] = useState(false)

  return (
    <Link href={href}>
      <button
        onFocus={() => setIsButtonFocused(true)}
        onBlur={() => setIsButtonFocused(false)}
        className={'relative h-28 w-32 ' + className}
      >
        <motion.div
          className="peer relative z-10 flex h-full w-full flex-col items-center rounded bg-white p-4 shadow-md dark:bg-slate-700"
          transition={DEFAULT_SPRING_TRANSITION}
          animate={isButtonFocused ? BUTTON_ACTIVE_ANIMATION : {}}
          onHoverStart={() => setIsButtonFocused(true)}
          onHoverEnd={() => setIsButtonFocused(false)}
        >
          {Icon && <Icon className="mb-2 mt-4" />}
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