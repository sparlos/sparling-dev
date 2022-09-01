import { useTheme } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, systemTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex h-full w-full items-center justify-center transition-colors duration-200 dark:bg-slate-700">
      <div className="container relative mx-auto flex h-full w-full flex-col items-center justify-center">
        <div className="absolute inset-0 flex h-full w-full items-start justify-end py-8 px-8">
          {mounted && (
            <div className="relative rounded shadow-md">
              <button
                className="peer relative z-10 block h-full w-full rounded bg-white p-4 dark:bg-slate-700"
                onClick={() =>
                  setTheme(
                    theme === 'dark' ||
                      (theme === 'system' && systemTheme === 'dark')
                      ? 'light'
                      : 'dark'
                  )
                }
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
              </button>
              {theme === 'dark' && (
                <div className="absolute inset-0 h-full w-full scale-105 rounded-md bg-white opacity-10 blur-sm transition duration-300 peer-hover:scale-125" />
              )}
            </div>
          )}
        </div>
        <main>{children}</main>
      </div>
    </div>
  )
}
