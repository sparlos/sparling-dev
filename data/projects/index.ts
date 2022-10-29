import { StaticImageData } from 'next/image'
import { SkillName } from '../../utils/skills'
import codepen from './codepen'
import oldPortfolio from './oldPortfolio'
import newPortfolio from './portfolio'
import sparlingCreations from './sparlingCreations'
import studioPlanner from './studioPlanner'

type ProjectImages = {
  cover: StaticImageData
  landscape: StaticImageData[]
  // portrait images should be taken via chrome dev tools "pixel 5"
  // (cmd + shift + p, "Capture screenshot")
  portrait: StaticImageData[]
}

export type Project = {
  title: string
  description: string
  slug: string
  tags: SkillName[]
  images: ProjectImages
}

const projects: Project[] = [
  studioPlanner,
  oldPortfolio,
  newPortfolio,
  codepen,
  sparlingCreations,
]

export default projects
