import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BigToggleState } from '../components/BigToggle'
import { getTagSelectOptions } from '../utils/projects'
import { decodeSkillsFromUrl, encodeSkillsForUrl, Skill } from '../utils/skills'
import projects, { Project } from '../data/projects'

export type DropdownOption = {
  value: string
  label: string
}

type ProjectSkillsQueryParams = {
  view?: string
  skills?: string
}

export default function useProjectSkillsDropdown({
  setToggleState,
  setSelectedSkill,
  skillsFromParams,
}: {
  setToggleState: (newState: BigToggleState) => void
  setSelectedSkill: (newSkill: Skill | null) => void
  skillsFromParams: string
}) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      const params = new URL(window.location.href).searchParams
      const view = params.get('view')
      const skills = params.get('skills')

      if (view) {
        const newToggleState = view === 'projects' ? 'left' : 'right'
        setToggleState(newToggleState)
      }

      if (skills) {
        const newDropdownValues = decodeSkillsFromUrl(skills).map((skill) => ({
          label: skill,
          value: skill,
        }))
        setDropdownValues(newDropdownValues)
      } else {
        setDropdownValues([])
      }

      if (!view && !skills) {
        setToggleState(null)
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router, setToggleState])

  const [dropdownOptions, _] = useState<DropdownOption[]>(
    getTagSelectOptions(projects)
  )
  const [dropdownValues, setDropdownValues] = useState<
    string | DropdownOption[]
  >(
    decodeSkillsFromUrl(skillsFromParams).map((skill) => ({
      label: skill,
      value: skill,
    }))
  )

  const handleSetDropdownValues = (
    newValue: string | DropdownOption[],
    replaceQuery = true
  ) => {
    setDropdownValues(newValue)
    const skillsForUrl = encodeSkillsForUrl(
      (newValue as DropdownOption[]).map((option) => option.value)
    )
    if (replaceQuery) {
      const newQuery: ProjectSkillsQueryParams = {
        ...router.query,
        skills: skillsForUrl,
      }
      router.push({
        query: newQuery,
      })
    }
  }

  const handleSetToggleState = (state: BigToggleState, skillName?: string) => {
    let newQuery: ProjectSkillsQueryParams = {
      view: state === 'left' ? 'projects' : 'skills',
    }

    if (skillName) {
      const newDropdownValues = [{ label: skillName, value: skillName }]
      handleSetDropdownValues(newDropdownValues, false)
      const skillsForUrl = encodeSkillsForUrl(
        newDropdownValues.map((option) => option.value)
      )
      newQuery.skills = skillsForUrl
    } else {
      setDropdownValues([])
    }

    router.push({
      query: newQuery,
    })
    setToggleState(state)
    setSelectedSkill(null)
  }

  return {
    dropdownOptions,
    dropdownValues,
    setDropdownValues,
    handleSetToggleState,
    handleSetDropdownValues,
  }
}
