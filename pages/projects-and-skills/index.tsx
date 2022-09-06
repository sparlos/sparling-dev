import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useState } from 'react'
import BigToggle, { BigToggleState } from '../../components/BigToggle'
import ScrollableContentContainer from '../../components/ScrollableContentContainer'
import {
  headingAnimation,
  toggleAnimation,
} from '../../utils/animations/projectsAndSkills'

export default function ProjectsAndSkills() {
  const [toggleState, setToggleState] = useState<BigToggleState>(null)

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
              setToggleState={setToggleState}
              toggleLeftText="Personal projects"
              toggleRightText="Work experience"
            />
          </motion.div>
        </LayoutGroup>
      </motion.div>
    </ScrollableContentContainer>
  )
}
