import codepen from './codepen'
import oldPortfolio from './oldPortfolio'
import newPortfolio from './portfolio'
import sparlingCreations from './sparlingCreations'

export type Project = {
  title: string
  slug: string
  tags: string[]
}

const projects: Project[] = [
  oldPortfolio,
  newPortfolio,
  codepen,
  sparlingCreations,
]

export default projects
