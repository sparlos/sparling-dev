import Link from 'next/link'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { useState } from 'react'

type LinkButtonProps = {
  className?: string
  bgColor?: string
  label: string
  href: string
  Icon?: IconType
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
      <motion.button
        onFocus={() => setIsButtonFocused(true)}
        onBlur={() => setIsButtonFocused(false)}
        className={'relative w-32 h-28 ' + className}
      >
        <motion.div
          className="flex relative z-10 flex-col p-4 w-full h-full items-center shadow-md rounded bg-white dark:bg-slate-700"
          animate={isButtonFocused ? { x: 10, y: -10 } : {}}
          whileHover={{
            x: 10,
            y: -10,
          }}
        >
          {Icon && <Icon className="mb-2 mt-4" />}
          <div>{label}</div>
        </motion.div>
        <motion.div
          className={
            'absolute top-0 left-0 rounded w-full h-full z-0 ' + bgColor
          }
        />
      </motion.button>
    </Link>
  )
}
