import { AnimatePresence, motion } from 'framer-motion'
import {
  FiCode,
  FiCodepen,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
  FiUser,
  FiEdit2,
} from 'react-icons/fi'
import useUIStore, { BackgroundIcon } from '../store/uiStore'
import { DEFAULT_SPRING_TRANSITION } from '../utils/framer'

const ICON_SIZE = 800
const ICON_CLASS =
  'absolute inset-0 z-0 flex items-center justify-center text-slate-200 dark:text-slate-700'

const getBackgroundIcon = (
  backgroundIcon: BackgroundIcon,
  iconSize: number
) => {
  switch (backgroundIcon) {
    case 'code':
      return <FiCode size={iconSize} width="100%" />
    case 'github':
      return <FiGithub size={iconSize} width="100%" />
    case 'mail':
      return <FiSend size={iconSize} width="100%" />
    case 'user':
      return <FiUser size={iconSize} width="100%" />
    case 'email':
      return <FiMail size={iconSize} width="100%" />
    case 'codepen':
      return <FiCodepen size={iconSize} width="100%" />
    case 'linkedin':
      return <FiLinkedin size={iconSize} width="100%" />
    case 'write':
      return <FiEdit2 size={iconSize} width="100%" />
    default:
      return null
  }
}

export default function IconBackground({
  iconSize = ICON_SIZE,
  iconOpacity = 1,
  isFixed = false,
}: {
  iconSize?: number
  iconOpacity?: number
  isFixed?: boolean
}) {
  const { backgroundIcon } = useUIStore()

  const renderIcon = (backgroundIcon: BackgroundIcon) => {
    if (!backgroundIcon) return null
    return (
      <motion.div
        key={backgroundIcon}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.5, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={DEFAULT_SPRING_TRANSITION}
        className={ICON_CLASS}
      >
        {getBackgroundIcon(backgroundIcon, iconSize)}
      </motion.div>
    )
  }

  return (
    <div
      style={{ opacity: iconOpacity }}
      className={`pointer-events-none inset-0 h-full w-full overflow-hidden ${
        isFixed ? 'fixed' : 'absolute'
      }`}
    >
      <AnimatePresence>{renderIcon(backgroundIcon)}</AnimatePresence>
    </div>
  )
}
