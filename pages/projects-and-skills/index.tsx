import { motion } from 'framer-motion'
import BigToggle from '../../components/BigToggle'
import ScrollableContentContainer from '../../components/ScrollableContentContainer'
import { headingAnimation } from '../../utils/animations/projectsAndSkills'

export default function ProjectsAndSkills() {
  return (
    <ScrollableContentContainer>
      <motion.h1 className="text-4xl" {...headingAnimation}>
        What are you looking for?
      </motion.h1>
      <div className="mt-14">
        <BigToggle
          toggleLeftText="Personal projects"
          toggleRightText="Work experience"
        />
      </div>
    </ScrollableContentContainer>
  )
}
