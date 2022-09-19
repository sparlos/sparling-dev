import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useRef, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { useOnClickOutside } from 'usehooks-ts'

export default function NavMenu() {
  const [isMenuButtonHovered, setIsMenuButtonHovered] = useState(false)
  const [isMenuActive, setIsMenuActive] = useState(false)
  const { theme, systemTheme } = useTheme()

  const currentTheme = theme !== 'system' ? theme : systemTheme

  const handleClickOutsideNav = () => {
    if (isMenuActive) {
      setIsMenuActive(false)
    }
  }

  const navButtonRef = useRef() as React.MutableRefObject<HTMLButtonElement>
  useOnClickOutside(navButtonRef, handleClickOutsideNav, 'mouseup')

  return (
    <div className="relative ml-4 rounded shadow-md">
      <motion.button
        ref={navButtonRef}
        aria-label={`turn dark mode ${currentTheme === 'dark' ? 'off' : 'on'}`}
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
  )
}
