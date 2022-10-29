import reactLogo from '../public/logos/react.svg'
import vueLogo from '../public/logos/vue.svg'
import awsLogo from '../public/logos/aws.svg'
import awsLightLogo from '../public/logos/awsLight.svg'
import mongoLogo from '../public/logos/mongo.svg'
import tailwindLogo from '../public/logos/tailwind.svg'
import sassLogo from '../public/logos/sass.svg'
import mysqlLogo from '../public/logos/mysql.svg'
import mysqlLightLogo from '../public/logos/mysqlLight.svg'
import nextJSLogo from '../public/logos/nextJS.png'
import headphonesLogo from '../public/logos/headphones.svg'
import headphonesLightLogo from '../public/logos/headphonesLight.svg'
import { StaticImageData } from 'next/image'

export type SkillName =
  | 'React'
  | 'AWS'
  | 'Tailwind'
  | 'SCSS'
  | 'vueJS'
  | 'MongoDB'
  | 'MySQL'
  | 'Next.js'
  | 'Audio'
  | 'GraphQL'
  | 'Figma'
  | 'Framer Motion'
  | 'Gatsby'
  | 'Algorithms'

export type Skill = {
  name: SkillName
  description: string
  logo?: string | StaticImageData
  logoDarkVariant?: string
}

export const getSkillLogo = (skills: Skill[], skillName: string) => {
  const skill = skills.find((skill) => skill.name === skillName)
  if (skill) {
    return skill.logoDarkVariant || skill.logo || null
  }
  return null
}

export const mockSkills: Skill[] = [
  {
    name: 'React',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
    logo: reactLogo,
  },
  {
    name: 'AWS',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I amthis is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
    logo: awsLogo,
    logoDarkVariant: awsLightLogo,
  },
  {
    name: 'Tailwind',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
    logo: tailwindLogo,
  },
  {
    name: 'SCSS',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
    logo: sassLogo,
  },
  {
    name: 'vueJS',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
    logo: vueLogo,
  },
  {
    name: 'MongoDB',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
    logo: mongoLogo,
  },
  {
    name: 'MySQL',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
    logo: mysqlLogo,
    logoDarkVariant: mysqlLightLogo,
  },
  {
    name: 'Next.js',
    description: 'nextjs is cool',
    logo: nextJSLogo,
  },
  {
    name: 'Audio',
    description: 'null',
    logo: headphonesLogo,
    logoDarkVariant: headphonesLightLogo,
  },
]

export const splitSkills = (skills: Skill[]): [Skill[], Skill[]] => {
  const midpoint =
    skills.length % 2 === 0 ? skills.length / 2 : skills.length / 2 + 1
  const firstHalf = skills.slice(0, midpoint)
  const secondHalf = skills.slice(midpoint, skills.length)
  return [firstHalf, secondHalf]
}

export const encodeSkillsForUrl = (skillNames: string[]) => {
  const joinedSkillNames = skillNames.join('&')
  return encodeURIComponent(joinedSkillNames)
}

export const decodeSkillsFromUrl = (skillNamesQuery: string) => {
  if (!skillNamesQuery) return []
  const decodedUri = decodeURIComponent(skillNamesQuery)
  return decodedUri.split('&')
}
