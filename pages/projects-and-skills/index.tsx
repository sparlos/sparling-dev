import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import Select from '../../components/Select'
import BigToggle, { BigToggleState } from '../../components/BigToggle'
import ScrollableContentContainer from '../../components/ScrollableContentContainer'
import {
  dropdownAnimation,
  dropdownLabelAnimation,
  headingAnimation,
  toggleAnimation,
} from '../../utils/animations/projectsAndSkills'
import useProjectSkillsDropdown from '../../hooks/useProjectSkillsDropdown'

export default function ProjectsAndSkills() {
  const [toggleState, setToggleState] = useState<BigToggleState>(null)
  const {
    dropdownOptions,
    dropdownValues,
    setDropdownValues,
    handleSetToggleState,
  } = useProjectSkillsDropdown({ setToggleState })

  return (
    <ScrollableContentContainer>
      <motion.div>
        <LayoutGroup>
          <AnimatePresence>
            {!toggleState && (
              <motion.h1
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
              <motion.div {...dropdownAnimation} className="mt-8" layout>
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
                    setDropdownValues(newValue as string | string[])
                  }
                  isMulti={toggleState === 'left'}
                  placeholder="React, AWS, etc."
                />
              </motion.div>
            </AnimatePresence>
          )}
        </LayoutGroup>
      </motion.div>
    </ScrollableContentContainer>
  )
}
