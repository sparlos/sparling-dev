import reactLogo from '../public/logos/react.svg'
import vueLogo from '../public/logos/vue.svg'
import awsLogo from '../public/logos/aws.svg'
import awsLightLogo from '../public/logos/awsLight.svg'
import mongoLogo from '../public/logos/mongo.svg'
import tailwindLogo from '../public/logos/tailwind.svg'
import sassLogo from '../public/logos/sass.svg'
import mysqlLogo from '../public/logos/mysql.svg'
import mysqlLightLogo from '../public/logos/mysqlLight.svg'

export type Skill = {
  name: string
  description: string
  logo?: string
  logoDarkVariant?: string
}

export const getSkillLogo = (
  skills: Skill[],
  skillName: string
): string | null => {
  const skill = skills.find((skill) => skill.name === skillName)
  if (skill) {
    return skill.logo || null
  }
  return null
}

export const mockSkills: Skill[] = [
  {
    name: 'react',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
    logo: reactLogo,
  },
  {
    name: 'aws',
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
    name: 'tailwind',
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
]

export const splitSkills = (skills: Skill[]): [Skill[], Skill[]] => {
  const midpoint =
    skills.length % 2 === 0 ? skills.length / 2 : skills.length / 2 + 1
  const firstHalf = skills.slice(0, midpoint)
  const secondHalf = skills.slice(midpoint, skills.length)
  return [firstHalf, secondHalf]
}
