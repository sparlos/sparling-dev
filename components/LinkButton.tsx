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
        className={'relative w-32 h-28 ' + className}
      >
        <motion.div
          className="peer flex relative z-10 flex-col p-4 w-full h-full items-center shadow-md rounded bg-white dark:bg-slate-700"
          transition={DEFAULT_SPRING_TRANSITION}
          animate={isButtonFocused ? BUTTON_ACTIVE_ANIMATION : {}}
          onHoverStart={() => setIsButtonFocused(true)}
          onHoverEnd={() => setIsButtonFocused(false)}
        >
          {Icon && <Icon className="mb-2 mt-4" />}
          <div>{label}</div>
        </motion.div>
        <div
          className={'absolute inset-0 rounded-md w-full h-full z-0 ' + bgColor}
        />
        <div
          className={
            'opacity-0 dark:opacity-25 absolute blur scale-125 peer-hover:scale-50 transition duration-500 p-6 inset-0 rounded-md w-full h-full z-0 ' +
            bgColor
          }
        />
      </button>
    </Link>
  )
}
