import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BigToggleState } from '../components/BigToggle'
import { getTagSelectOptions } from '../utils/projects'
import { decodeSkillsFromUrl, Skill } from '../utils/skills'
import projects from '../data/projects'

export type DropdownOption = {
  value: string
  label: string
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
  const [dropdownOptions, setDropdownOptions] = useState<DropdownOption[]>([])
  const [dropdownValues, setDropdownValues] = useState<
    string | DropdownOption[]
  >(
    decodeSkillsFromUrl(skillsFromParams).map((skill) => ({
      label: skill,
      value: skill,
    }))
  )

  useEffect(() => {
    setDropdownOptions(getTagSelectOptions(projects))
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
