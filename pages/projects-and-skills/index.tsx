import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
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

export default function ProjectsAndSkills() {
  const [hasCheckedParams, setHasCheckedParams] = useState(false)
  const [toggleState, setToggleState] = useState<BigToggleState>(null)
  const {
    dropdownOptions,
    dropdownValues,
    setDropdownValues,
    handleSetToggleState,
  } = useProjectSkillsDropdown({ setToggleState })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const view = params.get('view')
    if (view === 'projects') {
      setToggleState('left')
    } else if (view === 'skills') {
      setToggleState('right')
    }
    setHasCheckedParams(true)
  }, [])

  if (!hasCheckedParams) return null

  return (
    <ScrollableContentContainer large>
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
                <AnimatePresence>
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
              {toggleState === 'left' && (
                <motion.div
                  {...projectListAnimation}
                  className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3"
                  layout
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
                          <ProjectCard title={project.title} />
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </LayoutGroup>
      </motion.div>
    </ScrollableContentContainer>
  )
}
