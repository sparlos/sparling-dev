import { StaticImageData } from 'next/image'
import { SkillName } from '../../utils/skills'
import codepen from './codepen'
import livestreamRadio from './livestreamRadio'
import midiParticles from './midiParticles'
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
  newPortfolio,
  oldPortfolio,
  midiParticles,
  livestreamRadio,
  codepen,
  sparlingCreations,
]

export default projects
