import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useState } from 'react'
import Select from '../../components/Select'
import BigToggle, { BigToggleState } from '../../components/BigToggle'
import ScrollableContentContainer from '../../components/ScrollableContentContainer'
import {
  dropdownAnimation,
  dropdownLabelAnimation,
  headingAnimation,
  projectListAnimation,
  projectTileAnimation,
  toggleAnimation,
} from '../../utils/animations/projectsAndSkills'
import useProjectSkillsDropdown, {
  DropdownOption,
} from '../../hooks/useProjectSkillsDropdown'
import { mockProjectList } from '../../utils/projects'
import ProjectCard from '../../components/ProjectCard'
import { GetServerSidePropsContext } from 'next'
import { mockSkills, Skill } from '../../utils/skills'
import HorizontalSkillList from '../../components/HorizontalSkillList'

type ProjectsAndSkillsProps = {
  toggleStateFromParams?: BigToggleState
}

export default function ProjectsAndSkills({
  toggleStateFromParams,
}: ProjectsAndSkillsProps) {
  const [isPreToggled] = useState(!!toggleStateFromParams)
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [toggleState, setToggleState] = useState<BigToggleState>(
    toggleStateFromParams || null
  )
  const {
    dropdownOptions,
    dropdownValues,
    setDropdownValues,
    handleSetToggleState,
  } = useProjectSkillsDropdown({ setToggleState, setSelectedSkill })

  return (
    <ScrollableContentContainer
      large
      title={`${
        toggleState === 'right' ? 'skills' : 'projects'
      } | sparling.dev`}
    >
      <motion.div>
        <LayoutGroup>
          <AnimatePresence>
            {!toggleState && (
              <motion.h1
                key="heading"
                layout
                className="mb-14 text-4xl"
                {...headingAnimation}
              >
                What are you looking for?
              </motion.h1>
            )}
          </AnimatePresence>
          <motion.div {...toggleAnimation} layout>
            <BigToggle
              toggleState={toggleState}
              setToggleState={handleSetToggleState}
              toggleLeftText="Personal projects"
              toggleRightText="Work experience"
              isPreToggled={isPreToggled}
            />
          </motion.div>
          {!!toggleState && (
            <AnimatePresence>
              <motion.div
                key="dropdownContainer"
                {...dropdownAnimation}
                className="relative z-50 mt-8"
                layout
              >
                <AnimatePresence initial={false}>
                  <motion.label
                    {...dropdownLabelAnimation}
                    key={toggleState}
                    className="ml-1 mb-1 block text-sm text-black dark:text-slate-100"
                    htmlFor="projectFilter"
                  >
                    {toggleState === 'left'
                      ? 'Filter by tags'
                      : 'Select a skill'}
                  </motion.label>
                </AnimatePresence>
                <Select
                  isClearable
                  inputId="projectFilter"
                  options={dropdownOptions}
                  value={dropdownValues}
                  onChange={(newValue) =>
                    setDropdownValues(newValue as string | DropdownOption[])
                  }
                  isMulti={toggleState === 'left'}
                  placeholder="React, AWS, etc."
                />
              </motion.div>
              <AnimatePresence mode="wait">
                {toggleState === 'left' && (
                  <motion.div
                    key="projects-list"
                    {...projectListAnimation}
                    className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3"
                  >
                    <AnimatePresence>
                      {mockProjectList
                        .filter((project) =>
                          (dropdownValues as DropdownOption[]).every(
                            (dropdownOption) =>
                              project.tags.includes(dropdownOption.value)
                          )
                        )
                        .map((project) => (
                          <motion.div
                            {...projectTileAnimation}
                            key={project.title}
                          >
                            <ProjectCard {...project} />
                          </motion.div>
                        ))}
                    </AnimatePresence>
                  </motion.div>
                )}
                {toggleState === 'right' && (
                  <HorizontalSkillList
                    selectedSkill={selectedSkill}
                    setSelectedSkill={setSelectedSkill}
                    skills={mockSkills}
                  />
                )}
              </AnimatePresence>
            </AnimatePresence>
          )}
        </LayoutGroup>
      </motion.div>
    </ScrollableContentContainer>
  )
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { view } = query
  return {
    props: {
      toggleStateFromParams: view
        ? view === 'projects'
          ? 'left'
          : 'right'
        : null,
    },
  }
}
