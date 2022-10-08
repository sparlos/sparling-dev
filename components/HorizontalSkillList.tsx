import { motion } from 'framer-motion'
import { skillsListAnimation } from '../utils/animations/projectsAndSkills'
import { Skill, splitSkills } from '../utils/skills'
import SkillTile from './SkillTile'

export type HorizontalSkillListProps = {
  selectedSkill: Skill | null
  setSelectedSkill: (newSkill: Skill | null) => void
  skills: Skill[]
  onClickSkillLink: (skillName: string) => void
}

export default function HorizontalSkillList({
  selectedSkill,
  setSelectedSkill,
  skills,
  onClickSkillLink,
}: HorizontalSkillListProps) {
  const [leftSkills, rightSkills] = splitSkills(skills)

  return (
    <motion.div
      layout
      {...skillsListAnimation}
      className="relative mt-10 grid sm:grid-cols-2 sm:gap-4"
      key="skills-list"
    >
      <div key="left-skills" data-cy="left-skills">
        {leftSkills.map((skill, index) => (
          <SkillTile
            key={skill.name}
            skill={skill}
            onClickSkillLink={onClickSkillLink}
            isSelected={skill === selectedSkill}
            onClick={() =>
              selectedSkill === skill
                ? setSelectedSkill(null)
                : setSelectedSkill(skill)
            }
          />
        ))}
      </div>
      <div key="right-skills" data-cy="right-skills">
        {rightSkills.map((skill) => (
          <SkillTile
            key={skill.name}
            skill={skill}
            onClickSkillLink={onClickSkillLink}
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
