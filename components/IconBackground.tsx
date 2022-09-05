import { AnimatePresence, motion } from 'framer-motion'
import { FiCode, FiSend, FiUser } from 'react-icons/fi'
import useUIStore from '../store/uiStore'
import { DEFAULT_SPRING_TRANSITION } from '../utils/framer'

const ICON_SIZE = 800
const ICON_CLASS =
  'absolute inset-0 z-0 flex items-center justify-center text-slate-200 dark:text-slate-700'

export default function IconBackground() {
  const { backgroundIcon } = useUIStore()

  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
      <AnimatePresence>
        {backgroundIcon === 'user' && (
          <motion.div
            key="user"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={DEFAULT_SPRING_TRANSITION}
            className={ICON_CLASS}
          >
            <FiUser size={ICON_SIZE} width="100%" />
          </motion.div>
        )}
        {backgroundIcon === 'code' && (
          <motion.div
            key="code"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={DEFAULT_SPRING_TRANSITION}
            className={ICON_CLASS}
          >
            <FiCode size={ICON_SIZE} width="100%" />
          </motion.div>
        )}
        {backgroundIcon === 'mail' && (
          <motion.div
            key="mail"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={DEFAULT_SPRING_TRANSITION}
            className={ICON_CLASS}
          >
            <FiSend size={ICON_SIZE} width="100%" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
