import { motion } from 'framer-motion'
import { skillsListAnimation } from '../utils/animations/projectsAndSkills'
import { Skill, splitSkills } from '../utils/skills'
import SkillTile from './SkillTile'

type HorizontalSkillListProps = {
  selectedSkill: Skill | null
  setSelectedSkill: (newSkill: Skill | null) => void
  skills: Skill[]
}

export default function HorizontalSkillList({
  selectedSkill,
  setSelectedSkill,
  skills,
}: HorizontalSkillListProps) {
  const [leftSkills, rightSkills] = splitSkills(skills)

  return (
    <motion.div
      layout
      {...skillsListAnimation}
      className="relative mt-10 grid sm:grid-cols-2 sm:gap-4"
      key="skills-list"
    >
      <div>
        {leftSkills.map((skill) => (
          <SkillTile
            key={skill.name}
            skill={skill}
            isSelected={skill === selectedSkill}
            onClick={() =>
              selectedSkill === skill
                ? setSelectedSkill(null)
                : setSelectedSkill(skill)
            }
          />
        ))}
      </div>
      <div>
        {rightSkills.map((skill) => (
          <SkillTile
            key={skill.name}
            skill={skill}
            isSelected={skill === selectedSkill}
            onClick={() =>
              selectedSkill === skill
                ? setSelectedSkill(null)
                : setSelectedSkill(skill)
            }
          />
        ))}
      </div>
    </motion.div>
  )
}
