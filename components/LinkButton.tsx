import Link from 'next/link'
import { motion, TargetAndTransition } from 'framer-motion'
import { IconType } from 'react-icons'
import React, { MutableRefObject, useState } from 'react'
import { DEFAULT_SPRING_TRANSITION } from '../utils/framer'
import useUIStore, { BackgroundIcon } from '../store/uiStore'

type LinkButtonProps = {
  className?: string
  bgColor?: string
  label: string
  href: string
  Icon?: IconType
  backgroundIcon: BackgroundIcon
  showIcon?: boolean
  iconRef?: MutableRefObject<HTMLDivElement>
  openInNewTab?: boolean
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
  showIcon = true,
  iconRef,
  openInNewTab = false,
}: LinkButtonProps) {
  const [isButtonFocused, setIsButtonFocused] = useState(false)
  const { setBackgroundIcon } = useUIStore()

  const handleFocusButton = (isFocused: boolean) => {
    setBackgroundIcon(isFocused ? backgroundIcon : null)
    setIsButtonFocused(isFocused)
  }

  const linkProps = {
    'aria-label': `link to ${label}`,
    onClick: () => setBackgroundIcon(null),
    onBlur: () => handleFocusButton(false),
    className:
      'group relative h-28 w-32 max-w-full sm:mb-0 sm:h-28 sm:w-32 ' +
      (className || ''),
  }

  const renderWrapperElement = (children: React.ReactNode) => {
    if (openInNewTab) {
      return (
        <a
          {...linkProps}
          href={href}
          target="_blank"
          rel="noreferrer"
          className={linkProps.className + ' hover:cursor-pointer'}
        >
          {children}
        </a>
      )
    } else {
      return (
        <Link href={href}>
          <button {...linkProps}>{children}</button>
        </Link>
      )
    }
  }

  return renderWrapperElement(
    <React.Fragment>
      <motion.div
        className="peer relative z-10 flex h-full w-full flex-col items-center rounded-md bg-white p-4 shadow-md dark:bg-slate-700 sm:rounded"
        transition={DEFAULT_SPRING_TRANSITION}
        animate={isButtonFocused ? BUTTON_ACTIVE_ANIMATION : {}}
        onHoverStart={() => handleFocusButton(true)}
        onHoverEnd={() => handleFocusButton(false)}
      >
        <motion.div
          className="flex flex-1 items-end sm:block"
          ref={iconRef}
          animate={{
            scale: isButtonFocused ? 1.35 : 1,
            x: isButtonFocused ? 2 : 0,
            y: isButtonFocused ? -2 : 0,
            rotate: isButtonFocused ? 15 : 0,
          }}
          transition={DEFAULT_SPRING_TRANSITION}
        >
          {Icon && (
            <Icon
              className={
                showIcon ? 'mb-2 mt-1 sm:mt-4' : 'mt-1 mb-2 opacity-0 sm:mt-4'
              }
            />
          )}
        </motion.div>
        <div className="flex-1 text-sm sm:block">{label}</div>
      </motion.div>
      <div
        className={'absolute inset-0 z-0 h-full w-full rounded-md ' + bgColor}
      />
      <div
        className={
          'scale:100 absolute inset-0 z-0 h-full w-full rounded-md p-6 opacity-0 blur transition duration-500 group-focus:scale-50 peer-hover:scale-50 dark:opacity-25 sm:scale-125 ' +
          bgColor
        }
      />
    </React.Fragment>
  )
}
