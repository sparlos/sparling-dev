import { useState } from 'react'
import { BigToggleState } from '../components/BigToggle'
import { getTagSelectOptions, mockProjectList } from '../utils/projects'
import { mockSkills } from '../utils/skills'

export type DropdownOption = {
  value: string
  label: string
}

export default function useProjectSkillsDropdown({
  setToggleState,
}: {
  setToggleState: (newState: BigToggleState) => void
}) {
  const [dropdownOptions, setDropdownOptions] = useState<DropdownOption[]>([])
  const [dropdownValues, setDropdownValues] = useState<string | string[]>([])

  const handleSetToggleState = (state: BigToggleState) => {
    state === 'left'
      ? setDropdownOptions(getTagSelectOptions(mockProjectList))
      : setDropdownOptions(
          mockSkills.map((skill) => ({ label: skill, value: skill }))
        )
    setDropdownValues([])
    setToggleState(state)
  }

  return {
    dropdownOptions,
    dropdownValues,
    setDropdownValues,
    handleSetToggleState,
  }
}
