import { motion } from 'framer-motion'
import { FiCodepen, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { IconType } from 'react-icons'
import IconBackground from '../../components/IconBackground'
import { BackgroundIcon } from '../../store/uiStore'
import LinkButton from '../../components/LinkButton'
import {
  getLinkSlideDownAnimation,
  headingAnimation,
} from '../../utils/animations/contact'
import Head from 'next/head'

type IconLink = {
  Icon: IconType
  linkName: string
  link: string
  iconType: BackgroundIcon
  color: string
}

const links: IconLink[] = [
  {
    Icon: FiMail,
    linkName: 'Email',
    link: 'mailto:sparlingcreations@gmail.com',
    iconType: 'email',
    color: 'bg-email',
  },
  {
    Icon: FiGithub,
    linkName: 'GitHub',
    link: 'https://github.com/sparlos',
    iconType: 'github',
    color: 'bg-github',
  },
  {
    Icon: FiCodepen,
    linkName: 'CodePen',
    link: 'https://codepen.io/sparlos',
    iconType: 'codepen',
    color: 'bg-codepen',
  },
  {
    Icon: FiLinkedin,
    linkName: 'Linkedin',
    link: 'https://ca.linkedin.com/in/stephen-sparling-033643171',
    iconType: 'linkedin',
    color: 'bg-linkedin',
  },
]

export default function Contact() {
  return (
    <div className="relative flex h-full flex-col items-center overflow-auto text-center">
      <Head>
        <title>contact | sparling.dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="relative z-10 mt-2 mb-auto flex w-full max-w-4xl flex-col items-center py-24 sm:mt-16 md:mt-24">
        <motion.h1 className="mt-6 text-center text-4xl" {...headingAnimation}>
          Where to find me
        </motion.h1>
        <div className="mt-10 grid w-full grid-cols-1 sm:mt-20 sm:grid-cols-2 sm:gap-4 md:grid-cols-4">
          {links.map((link, index) => (
            <motion.div
              className={`flex ${
                index % 2 === 0
                  ? 'sm:mr-8 sm:justify-end'
                  : 'sm:ml-8 sm:justify-start'
              } mb-4 justify-center sm:mb-8 md:mb-0 md:mr-0 md:ml-0 md:justify-center`}
              key={link.link + index}
              {...getLinkSlideDownAnimation(index * 0.05)}
            >
              <LinkButton
                Icon={link.Icon}
                bgColor={link.color}
                href={link.link}
                label={link.linkName}
                backgroundIcon={link.iconType}
                className="mb-0"
                openInNewTab
              />
            </motion.div>
          ))}
        </div>
      </div>
      <IconBackground iconSize={700} iconOpacity={0.35} isFixed />
    </div>
  )
}
