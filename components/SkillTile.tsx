import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { DEFAULT_SPRING_TRANSITION } from '../utils/framer'
import { Skill } from '../utils/skills'

type SkillTileProps = {
  skill: Skill
  isSelected: boolean
  onClick: () => void
}

export default function SkillTile({
  skill,
  isSelected,
  onClick,
}: SkillTileProps) {
  return (
    <motion.button
      onClick={onClick}
      className="min-h-10 relative mx-auto mb-4 flex w-full flex-col items-center overflow-hidden rounded-lg shadow-md dark:bg-slate-600"
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 30,
      }}
    >
      <motion.div className="w-full pt-2">
        <span className="relative">{skill.name}</span>
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: isSelected ? 180 : 0 }}
          transition={DEFAULT_SPRING_TRANSITION}
          className="absolute right-4 top-[0.85rem]"
        >
          <FiChevronDown />
        </motion.span>
      </motion.div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isSelected ? 'auto' : 0 }}
        className="mt-2 text-sm"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isSelected ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="px-8 pb-4"
        >
          {skill.description}
        </motion.div>
      </motion.div>
    </motion.button>
  )
}
