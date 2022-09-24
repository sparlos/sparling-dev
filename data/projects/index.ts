import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import codepen from './codepen'
import oldPortfolio from './oldPortfolio'
import newPortfolio from './portfolio'
import sparlingCreations from './sparlingCreations'

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
