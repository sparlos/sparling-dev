import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiChevronDown } from 'react-icons/fi'
import { DEFAULT_SPRING_TRANSITION } from '../../utils/framer'
import { Skill } from '../../utils/skills'

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
      aria-label={`display description for ${skill}`}
      onClick={onClick}
      className="min-h-10 relative mx-auto mb-4 flex w-full flex-col items-center overflow-hidden rounded-lg shadow-md dark:bg-slate-600"
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 30,
      }}
    >
      <motion.div className="flex w-full items-center justify-between px-4 pt-2">
        {skill.logo ? (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isSelected ? 360 : 0 }}
            transition={DEFAULT_SPRING_TRANSITION}
            className="flex items-center"
          >
            <div className="pt-1 dark:hidden">
              <Image
                width={15}
                height={15}
                src={skill.logo}
                alt={`${skill.name} logo`}
              />
            </div>
            <div className="hidden pt-1 dark:block">
              <Image
                width={15}
                height={15}
                src={skill.logoDarkVariant || skill.logo}
                alt={`${skill.name} logo`}
              />
            </div>
          </motion.div>
        ) : (
          <div />
        )}
        <span className="relative">{skill.name}</span>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isSelected ? 180 : 0 }}
          transition={DEFAULT_SPRING_TRANSITION}
        >
          <FiChevronDown />
        </motion.div>
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
