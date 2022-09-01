import { useTheme } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { DEFAULT_SPRING_TRANSITION } from '../utils/framer'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false)
  const [isDarkModeToggleHovered, setIsDarkModeToggleHovered] = useState(false)
  const { theme, systemTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex h-full w-full transition-colors duration-200 dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700">
      <div className="container relative mx-auto flex h-full w-full flex-col">
        <div className="pointer-events-none absolute inset-0 flex h-full w-full items-start justify-end py-8 px-8">
          {mounted && (
            <div className="relative rounded shadow-md">
              <motion.button
                onHoverStart={() => setIsDarkModeToggleHovered(true)}
                onHoverEnd={() => setIsDarkModeToggleHovered(false)}
                className="peer pointer-events-auto relative z-10 block h-full w-full rounded bg-white p-4 dark:bg-slate-700"
                onClick={() =>
                  setTheme(
                    theme === 'dark' ||
                      (theme === 'system' && systemTheme === 'dark')
                      ? 'light'
                      : 'dark'
                  )
                }
              >
                <motion.div
                  animate={{
                    rotate: isDarkModeToggleHovered ? 360 : 0,
                  }}
                  transition={DEFAULT_SPRING_TRANSITION}
                >
                  <FiSun
                    className={
                      theme === 'dark' ||
                      (theme === 'system' && systemTheme === 'dark')
                        ? 'block'
                        : 'hidden'
                    }
                  />
                  <FiMoon
                    className={
                      theme === 'light' ||
                      (theme === 'system' && systemTheme === 'light')
                        ? 'block'
                        : 'hidden'
                    }
                  />
                </motion.div>
              </motion.button>
              {theme === 'dark' && (
                <div className="absolute inset-0 h-full w-full scale-105 rounded-md bg-white opacity-10 blur-sm transition duration-300 peer-hover:scale-125" />
              )}
            </div>
          )}
        </div>
        <main className="h-full w-full">{children}</main>
      </div>
    </div>
  )
}
