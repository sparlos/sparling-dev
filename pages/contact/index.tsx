import ScrollableContentContainer from '../../components/ScrollableContentContainer'
import { FiCodepen, FiGithub, FiMail } from 'react-icons/fi'
import { IconType } from 'react-icons'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { DEFAULT_SPRING_TRANSITION } from '../../utils/framer'
import IconBackground from '../../components/IconBackground'
import useUIStore, { BackgroundIcon } from '../../store/uiStore'

type IconLink = {
  Icon: IconType
  linkName: string
  link: string
  iconType: BackgroundIcon
}

const FloatingIconLink = ({ iconLink }: { iconLink: IconLink }) => {
  const { setBackgroundIcon } = useUIStore()
  const [isHovered, setIsHovered] = useState(false)
  const { Icon, linkName, link } = iconLink

  const handleHover = () => {
    setIsHovered(true)
    setBackgroundIcon(iconLink.iconType)
  }

  const handleBlur = () => {
    setIsHovered(false)
    setBackgroundIcon(null)
  }

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="mb-4 flex items-center text-xl underline"
      onHoverStart={() => handleHover()}
      onHoverEnd={() => handleBlur()}
      onFocus={() => handleHover()}
      onBlur={() => handleBlur()}
    >
      <motion.div>{linkName}</motion.div>
      <motion.div
        className="ml-2"
        initial={{ opacity: 0, rotate: -35 }}
        animate={{ opacity: isHovered ? 1 : 0, rotate: isHovered ? 0 : -45 }}
        transition={DEFAULT_SPRING_TRANSITION}
      >
        <Icon />
      </motion.div>
    </motion.a>
  )
}

const links: IconLink[] = [
  {
    Icon: FiMail,
    linkName: 'Email',
    link: 'mailto:sparlingcreations@gmail.com',
    iconType: 'email',
  },
  {
    Icon: FiGithub,
    linkName: 'GitHub',
    link: 'https://github.com/sparlos',
    iconType: 'github',
  },
  {
    Icon: FiCodepen,
    linkName: 'CodePen',
    link: 'https://codepen.io/sparlos',
    iconType: 'codepen',
  },
]

export default function Contact() {
  return (
    <ScrollableContentContainer large title="contact | sparling.dev">
      <h1 className="mb-12 text-4xl">Places I&apos;m found</h1>
      <div className="flex flex-col items-start">
        {links.map((link) => (
          <FloatingIconLink key={link.linkName} iconLink={link} />
        ))}
      </div>
      <IconBackground iconSize={700} iconOpacity={0.5} />
    </ScrollableContentContainer>
  )
}
