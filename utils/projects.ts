import { DropdownOption } from '../hooks/useProjectSkillsDropdown'

export type Project = {
  title: string
  slug: string
  tags: string[]
}

export const mockProjectList: Project[] = [
  {
    title: 'old portfolio',
    slug: 'old-portfolio',
    tags: ['react', 'tailwind'],
  },
  {
    title: 'new portfolio',
    slug: 'new-portfolio',
    tags: ['react', 'tailwind', 'nextjs'],
  },
  {
    title: 'codepen stuff',
    slug: 'codepen-stuff',
    tags: ['vueJS', 'audio', 'algorithms'],
  },
  {
    title: 'sparling creations',
    slug: 'sparling-creations',
    tags: ['vueJS', 'audio', 'cockpit CMS'],
  },
]

export const getUniqueTags = (projects: Project[]): string[] => {
  return Object.keys(
    projects.reduce((uniqueTags, project) => {
      project.tags.forEach((tag) => {
        uniqueTags[tag] = tag
      })
      return uniqueTags
    }, {} as { [key: string]: string })
  )
}

export const getTagSelectOptions = (projects: Project[]): DropdownOption[] => {
  const uniqueTags = getUniqueTags(projects)
  return uniqueTags.map((tag) => ({ value: tag, label: tag }))
}
