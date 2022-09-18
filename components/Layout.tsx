import { useTheme } from 'next-themes'
import { Fragment, ReactNode, useEffect, useRef, useState } from 'react'
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useOnClickOutside } from 'usehooks-ts'
import { DEFAULT_SPRING_TRANSITION } from '../utils/framer'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false)
  const [isDarkModeToggleHovered, setIsDarkModeToggleHovered] = useState(false)
  const [isMenuButtonHovered, setIsMenuButtonHovered] = useState(false)
  const [isMenuActive, setIsMenuActive] = useState(false)
  const { theme, systemTheme, setTheme } = useTheme()

  const currentTheme = theme !== 'system' ? theme : systemTheme

  const handleClickOutsideNav = () => {
    if (isMenuActive) {
      setIsMenuActive(false)
    }
  }

  const navButtonRef = useRef() as React.MutableRefObject<HTMLButtonElement>
  useOnClickOutside(navButtonRef, handleClickOutsideNav)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex h-full w-full transition-colors duration-200 dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700">
      <div className="container relative mx-auto flex h-full w-full flex-col">
        <div className="pointer-events-none absolute inset-0 z-50 flex h-full w-full items-start justify-end py-8 px-8">
          {mounted && (
            <Fragment>
              <div className="relative rounded shadow-md">
                <motion.button
                  aria-label={`turn dark mode ${
                    currentTheme === 'dark' ? 'off' : 'on'
                  }`}
                  onHoverStart={() => setIsDarkModeToggleHovered(true)}
                  onHoverEnd={() => setIsDarkModeToggleHovered(false)}
                  className="peer pointer-events-auto relative z-10 block h-12 w-12 rounded bg-white p-4 dark:bg-slate-700"
                  onClick={() =>
                    setTheme(currentTheme === 'dark' ? 'light' : 'dark')
                  }
                >
                  <motion.div
                    animate={{
                      rotate: isDarkModeToggleHovered ? 360 : 0,
                    }}
                    transition={DEFAULT_SPRING_TRANSITION}
                  >
                    <FiSun
                      className={currentTheme === 'dark' ? 'block' : 'hidden'}
                    />
                    <FiMoon
                      className={currentTheme === 'light' ? 'block' : 'hidden'}
                    />
                  </motion.div>
                </motion.button>
                {currentTheme === 'dark' && (
                  <div className="absolute inset-0 h-full w-full scale-105 rounded-md bg-white opacity-10 blur-sm transition duration-300 peer-hover:scale-125" />
                )}
              </div>
              <div className="relative ml-4 rounded shadow-md">
                <motion.button
                  ref={navButtonRef}
                  aria-label={`turn dark mode ${
                    currentTheme === 'dark' ? 'off' : 'on'
                  }`}
                  onFocus={() => setIsMenuButtonHovered(true)}
                  onBlur={() => setIsMenuButtonHovered(false)}
                  onHoverStart={() => setIsMenuButtonHovered(true)}
                  onHoverEnd={() => setIsMenuButtonHovered(false)}
                  className="pointer-events-auto relative z-10 flex items-center overflow-hidden rounded bg-white p-4 dark:bg-slate-700"
                  onClick={() => setIsMenuActive(!isMenuActive)}
                  initial={{ width: '3rem', height: '3rem' }}
                  animate={{
                    width: isMenuActive ? '12rem' : '3rem',
                    height: isMenuActive ? '16rem' : '3rem',
                  }}
                >
                  <motion.div
                    initial={{ rotate: 0, y: 0 }}
                    animate={{
                      rotate: isMenuButtonHovered ? 90 : 0,
                      y: isMenuActive ? -150 : 0,
                    }}
                  >
                    <FiMenu />
                  </motion.div>
                </motion.button>
              </div>
            </Fragment>
          )}
        </div>
        <main className="h-full w-full">{children}</main>
      </div>
      {/* fix for when android URL bar disappears and gradient BG doesn't fill whole screen */}
      <div className="fixed -z-10 h-full w-full transition-colors duration-200 dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700" />
    </div>
  )
}
