import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useState } from 'react'
import Select from '../../components/Select'
import BigToggle, { BigToggleState } from '../../components/BigToggle'
import ScrollableContentContainer from '../../components/ScrollableContentContainer'
import {
  headingAnimation,
  dropdownAnimation,
  projectListAnimation,
  projectTileAnimation,
  toggleAnimation,
} from '../../utils/animations/projectsAndSkills'
import useProjectSkillsDropdown, {
  DropdownOption,
} from '../../hooks/useProjectSkillsDropdown'
import projects from '../../data/projects'
import ProjectCard from '../../components/ProjectCard'
import { GetServerSidePropsContext } from 'next'
import { encodeSkillsForUrl, mockSkills, Skill } from '../../utils/skills'
import HorizontalSkillList from '../../components/HorizontalSkillList'
import { useRouter } from 'next/router'

type ProjectsAndSkillsProps = {
  toggleStateFromParams?: BigToggleState
  skillsFromParams: string
}

export default function ProjectsAndSkills({
  toggleStateFromParams,
  skillsFromParams,
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
  } = useProjectSkillsDropdown({
    setToggleState,
    setSelectedSkill,
    skillsFromParams,
  })
  const router = useRouter()

  const handleSetDropdownValues = (
    newValue: string | DropdownOption[],
    replaceQuery = true
  ) => {
    setDropdownValues(newValue)
    const skillsForUrl = encodeSkillsForUrl(
      (newValue as DropdownOption[]).map((option) => option.value)
    )
    replaceQuery &&
      router.replace({
        query: { ...router.query, skills: skillsForUrl },
      })
  }

  const handleClickSkillLink = (skillName: string) => {
    setToggleState('left')
    const newDropdownValues = [{ label: skillName, value: skillName }]
    handleSetDropdownValues(newDropdownValues, false)
    const skillsForUrl = encodeSkillsForUrl(
      newDropdownValues.map((option) => option.value)
    )
    router.replace({
      query: { view: 'projects', skills: skillsForUrl },
    })
  }

  const filteredProjects = projects.filter((project) => {
    if (dropdownValues.length === 0) return true
    return (dropdownValues as DropdownOption[]).some((dropdownOption) =>
      project.tags.includes(dropdownOption.value)
    )
  })

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
                layout
                className="mb-6 mt-14 text-2xl sm:mt-0 sm:mb-14 sm:text-4xl"
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
              toggleLeftText="Projects"
              toggleRightText="Experience"
              isPreToggled={isPreToggled}
            />
          </motion.div>
          {!!toggleState && (
            <AnimatePresence mode="wait">
              {toggleState === 'left' && (
                <motion.div>
                  <motion.div
                    key="dropdownContainer"
                    {...dropdownAnimation}
                    className="relative z-40 mt-8"
                    layout
                  >
                    <motion.label
                      className="ml-1 mb-1 block text-sm text-black dark:text-slate-100"
                      htmlFor="projectFilter"
                    >
                      Filter by tags
                    </motion.label>
                    <Select
                      isClearable
                      inputId="projectFilter"
                      options={dropdownOptions}
                      value={dropdownValues}
                      onChange={(newValue) =>
                        handleSetDropdownValues(
                          newValue as string | DropdownOption[]
                        )
                      }
                      isMulti={toggleState === 'left'}
                      placeholder="React, AWS, etc."
                    />
                  </motion.div>
                  <motion.div
                    key="projects-list"
                    {...projectListAnimation}
                    className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3"
                  >
                    <AnimatePresence>
                      {filteredProjects.map((project) => (
                        <motion.div
                          {...projectTileAnimation}
                          key={project.slug}
                        >
                          <ProjectCard project={project} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              )}
              {toggleState === 'right' && (
                <HorizontalSkillList
                  onClickSkillLink={handleClickSkillLink}
                  selectedSkill={selectedSkill}
                  setSelectedSkill={setSelectedSkill}
                  skills={mockSkills}
                />
              )}
            </AnimatePresence>
          )}
        </LayoutGroup>
      </motion.div>
    </ScrollableContentContainer>
  )
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { view, skills } = query
  return {
    props: {
      toggleStateFromParams: view
        ? view === 'projects'
          ? 'left'
          : 'right'
        : null,
      skillsFromParams: skills || '',
    },
  }
}
