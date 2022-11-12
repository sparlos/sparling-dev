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
  | 'Vuetify'
  | 'Material Design'
  | 'Web MIDI API'
  | 'Vuex'
  | 'Canvas'
  | 'OoP'
  | 'Supabase'
  | 'Chakra UI'
  | 'dnd-kit'
  | 'Cypress'
  | 'Python'
  | 'Node.js'
  | 'Docker'
  | 'Kubernetes'

export type Skill = {
  name: SkillName
  description: string | string[]
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
