import ScrollableContentContainer from '../../components/ScrollableContentContainer'
import { FiCodepen, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { IconType } from 'react-icons'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
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

  useEffect(() => {
    return () => setBackgroundIcon(null)
  }, [setBackgroundIcon])

  const handleHover = () => {
    setIsHovered(true)
    setBackgroundIcon(iconLink.iconType)
  }

  const handleBlur = () => {
    setIsHovered(false)
    setBackgroundIcon(null)
  }

  return (
    <div className="relative mb-8 flex items-center text-lg">
      <motion.a
        className="underline"
        href={link}
        target="_blank"
        rel="noreferrer"
        onHoverStart={() => handleHover()}
        onHoverEnd={() => handleBlur()}
        onFocus={() => handleHover()}
        onBlur={() => handleBlur()}
      >
        {linkName}
      </motion.a>
      <motion.div
        className="absolute -left-6 mr-2"
        initial={{ opacity: 0, rotate: 35 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          rotate: isHovered ? -720 : 0,
          x: isHovered ? -150 : 0,
          y: isHovered ? 50 : 0,
        }}
        transition={{
          opacity: { duration: 0.5 },
          duration: isHovered ? 1.75 : 0.5,
        }}
      >
        <Icon />
      </motion.div>
      <motion.div
        className="absolute -right-6 ml-2"
        initial={{ opacity: 0, rotate: -35 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          rotate: isHovered ? 720 : 0,
          x: isHovered ? 150 : 0,
          y: isHovered ? 50 : 0,
        }}
        transition={{
          opacity: { duration: 0.5 },
          duration: isHovered ? 1.75 : 0.5,
        }}
      >
        <Icon />
      </motion.div>
    </div>
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
  {
    Icon: FiLinkedin,
    linkName: 'Linkedin',
    link: 'https://ca.linkedin.com/in/stephen-sparling-033643171',
    iconType: 'linkedin',
  },
]

export default function Contact() {
  return (
    <ScrollableContentContainer large title="contact | sparling.dev">
      <h1 className="mt-6 text-center text-4xl">Check out my stuff!</h1>
      <div className="mt-12 flex flex-col items-center">
        {links.map((link) => (
          <FloatingIconLink key={link.linkName} iconLink={link} />
        ))}
      </div>
      <IconBackground iconSize={700} iconOpacity={0.35} />
    </ScrollableContentContainer>
  )
}
