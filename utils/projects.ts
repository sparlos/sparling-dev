import { DropdownOption } from '../hooks/useProjectSkillsDropdown'

type Project = {
  title: string
  tags: string[]
}

export const mockProjectList: Project[] = [
  {
    title: 'old portfolio',
    tags: ['react', 'tailwind'],
  },
  {
    title: 'new portfolio',
    tags: ['react', 'tailwind', 'nextjs'],
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
