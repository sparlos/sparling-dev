import { StaticImageData } from 'next/image'
import codepen from './codepen'
import oldPortfolio from './oldPortfolio'
import newPortfolio from './portfolio'
import sparlingCreations from './sparlingCreations'

type ProjectImages = {
  cover: StaticImageData
  landscape: StaticImageData[]
  portrait: StaticImageData[]
}

export type Project = {
  title: string
  slug: string
  tags: string[]
  images: ProjectImages
}

const projects: Project[] = [
  oldPortfolio,
  newPortfolio,
  codepen,
  sparlingCreations,
]

export default projects
