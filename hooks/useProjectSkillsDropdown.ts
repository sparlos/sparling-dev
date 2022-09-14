import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BigToggleState } from '../components/BigToggle'
import { getTagSelectOptions } from '../utils/projects'
import { mockSkills, Skill } from '../utils/skills'
import projects from '../data/projects'

export type DropdownOption = {
  value: string
  label: string
}

export default function useProjectSkillsDropdown({
  setToggleState,
  setSelectedSkill,
}: {
  setToggleState: (newState: BigToggleState) => void
  setSelectedSkill: (newSkill: Skill | null) => void
}) {
  const router = useRouter()
  const [dropdownOptions, setDropdownOptions] = useState<DropdownOption[]>([])
  const [dropdownValues, setDropdownValues] = useState<
    string | DropdownOption[]
  >([])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const view = params.get('view')
    view === 'projects' && setDropdownOptions(getTagSelectOptions(projects))
  }, [])

  const handleSetToggleState = (state: BigToggleState) => {
    state === 'left' && setDropdownOptions(getTagSelectOptions(projects))

    router.replace({
      query: { view: state === 'left' ? 'projects' : 'skills' },
    })
    setDropdownValues([])
    setToggleState(state)
    setSelectedSkill(null)
  }

  return {
    dropdownOptions,
    dropdownValues,
    setDropdownValues,
    handleSetToggleState,
  }
}
