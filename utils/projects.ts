import { DropdownOption } from '../hooks/useProjectSkillsDropdown'
import { Project } from '../data/projects/index'
import * as DOMPurify from 'dompurify'

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

export const purifyProjectDescription = (description: string) =>
  DOMPurify.sanitize(description, { ADD_ATTR: ['target'] })
