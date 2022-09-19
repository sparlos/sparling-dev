import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useRef, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useOnClickOutside } from 'usehooks-ts'
import { DEFAULT_SPRING_TRANSITION } from '../utils/framer'

export default function NavMenu() {
  const [isMenuButtonHovered, setIsMenuButtonHovered] = useState(false)
  const [isMenuActive, setIsMenuActive] = useState(false)

  const handleClickOutsideNav = () => {
    if (isMenuActive) {
      setIsMenuActive(false)
    }
  }

  const navMenuRef = useRef() as React.MutableRefObject<HTMLButtonElement>
  useOnClickOutside(navMenuRef, handleClickOutsideNav, 'mouseup')

  return (
    <div className="relative ml-4 rounded shadow-md">
      <motion.div>
        <motion.button
          ref={navMenuRef}
          aria-label={`${isMenuActive ? 'close' : 'open'} nav menu`}
          onFocus={() => setIsMenuButtonHovered(true)}
          onBlur={() => setIsMenuButtonHovered(false)}
          onHoverStart={() => setIsMenuButtonHovered(true)}
          onHoverEnd={() => setIsMenuButtonHovered(false)}
          className="pointer-events-auto relative z-20 flex items-center rounded bg-white p-4 dark:bg-slate-700"
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {!isMenuActive && (
              <motion.div
                key="nav-menu-open-icon"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                exit={{ opacity: 0, rotate: 720 }}
                transition={{
                  opacity: { duration: 0.25 },
                  rotate: DEFAULT_SPRING_TRANSITION,
                }}
              >
                <FiMenu />
              </motion.div>
            )}
            {isMenuActive && (
              <motion.div
                key="nav-menu-close-icon"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                exit={{ opacity: 0, rotate: 720 }}
                transition={{
                  opacity: { duration: 0.25 },
                  rotate: DEFAULT_SPRING_TRANSITION,
                }}
              >
                <FiX />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
        <motion.div
          initial={{
            width: '3rem',
            height: '3rem',
          }}
          animate={{
            width: isMenuActive ? '12rem' : '3rem',
            height: isMenuActive ? '16rem' : '3rem',
          }}
          className="absolute top-0 right-0 z-10 h-full w-64 overflow-hidden rounded bg-white p-4 dark:bg-slate-700"
        >
          <AnimatePresence>
            {isMenuActive && (
              <motion.div
                className="whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1 } }}
                exit={{ opacity: 0, transition: { duration: 0.1, delay: 0 } }}
              >
                <motion.div>who I am</motion.div>
                <motion.div>what I do</motion.div>
                <motion.div>where I&apos;m found</motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  )
}
