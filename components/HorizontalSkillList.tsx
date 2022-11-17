import { motion } from 'framer-motion'
import { MutableRefObject } from 'react'
import { skillsListAnimation } from '../utils/animations/projectsAndSkills'
import { Skill, splitSkills } from '../utils/skills'
import SkillTile from './SkillTile'

export type HorizontalSkillListProps = {
  selectedSkill: Skill | null
  setSelectedSkill: (newSkill: Skill | null) => void
  skills: Skill[]
  onClickSkillLink: (skillName: string) => void
  scrollContainerRef?: MutableRefObject<HTMLDivElement>
}

export default function HorizontalSkillList({
  selectedSkill,
  setSelectedSkill,
  skills,
  onClickSkillLink,
  scrollContainerRef,
}: HorizontalSkillListProps) {
  const [leftSkills, rightSkills] = splitSkills(skills)

  const handleSkillLinkClick = (skillName: string) => {
    scrollContainerRef?.current.scrollTo(0, 0)
    onClickSkillLink(skillName)
  }

  return (
    <motion.div
      layout
      {...skillsListAnimation}
      className="relative mt-10 grid md:grid-cols-2 md:gap-4"
      key="skills-list"
    >
      <div key="left-skills" data-cy="left-skills">
        {leftSkills.map((skill, index) => (
          <SkillTile
            scrollContainerRef={scrollContainerRef}
            key={skill.name}
            skill={skill}
            onClickSkillLink={handleSkillLinkClick}
            isSelected={skill.name === selectedSkill?.name}
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
            scrollContainerRef={scrollContainerRef}
            key={skill.name}
            skill={skill}
            onClickSkillLink={handleSkillLinkClick}
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
