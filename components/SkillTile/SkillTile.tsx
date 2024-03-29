import { motion } from 'framer-motion'
import Image from 'next/image'
import { MutableRefObject, useEffect, useRef } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import * as Accordion from '@radix-ui/react-accordion'
import projects from '../../data/projects'
import { DEFAULT_SPRING_TRANSITION } from '../../utils/framer'
import { getUniqueTags } from '../../utils/projects'
import { Skill } from '../../utils/skills'
import useScrollToSkillTile from './hooks/useScrollToSkillTile'

export type SkillTileProps = {
  skill: Skill
  isSelected: boolean
  onClick: () => void
  onClickSkillLink: (skillName: string) => void
  scrollContainerRef?: MutableRefObject<HTMLDivElement>
}

export default function SkillTile({
  skill,
  isSelected,
  onClick,
  onClickSkillLink,
  scrollContainerRef,
}: SkillTileProps) {
  const hasProjects = getUniqueTags(projects).find((tag) => tag === skill.name)
  const { ref, handleScrollTo } = useScrollToSkillTile({
    scrollContainerRef,
    isSelected,
  })

  return (
    <Accordion.Root
      collapsible
      onValueChange={() => handleScrollTo(onClick)}
      value={isSelected ? skill.name : ''}
      type="single"
    >
      <Accordion.Item
        value={skill.name}
        className="relative mx-auto mb-4 flex min-h-[2.875rem] w-full flex-col items-center overflow-hidden rounded-lg shadow-md dark:bg-slate-600"
      >
        <Accordion.Header ref={ref} className="w-full">
          <Accordion.Trigger className="flex w-full items-center justify-between px-4 pt-2">
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
                <div className="hidden pt-1 text-slate-400 dark:block">
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
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="accordion-content" asChild>
          {/*
            the below animation only works because of code in
            globals.css (delay to allow framer to handle animation) 
            if the timing on the below height animation changes,
            you NEED to change the timing in globals.css as well
          */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: isSelected ? 'auto' : 0 }}
          >
            <motion.div
              data-cy="expandable-description-box"
              initial={{ opacity: 0 }}
              animate={{ opacity: isSelected ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className={`px-8 text-left ${hasProjects ? 'pb-12' : 'pb-4'}`}
            >
              {Array.isArray(skill.description)
                ? skill.description.map((paragraph, key) => (
                    <p
                      key={`${skill.name}-description-paragraph-${key}`}
                      className="mb-2"
                    >
                      {paragraph}
                    </p>
                  ))
                : skill.description}
            </motion.div>
            {isSelected && hasProjects && (
              <motion.div
                className="absolute bottom-4 left-0 flex w-full justify-center text-cyan-700 dark:text-cyan-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <button
                  onClick={() => onClickSkillLink(skill.name)}
                  className="underline"
                >
                  See projects using {skill.name}
                </button>
              </motion.div>
            )}
          </motion.div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}
