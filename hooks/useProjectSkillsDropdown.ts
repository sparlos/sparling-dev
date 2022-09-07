import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
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
  const router = useRouter()
  const [dropdownOptions, setDropdownOptions] = useState<DropdownOption[]>([])
  const [dropdownValues, setDropdownValues] = useState<
    string | DropdownOption[]
  >([])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const view = params.get('view')
    view === 'projects'
      ? setDropdownOptions(getTagSelectOptions(mockProjectList))
      : setDropdownOptions(
          mockSkills.map((skill) => ({ label: skill, value: skill }))
        )
  }, [])

  const handleSetToggleState = (state: BigToggleState) => {
    state === 'left'
      ? setDropdownOptions(getTagSelectOptions(mockProjectList))
      : setDropdownOptions(
          mockSkills.map((skill) => ({ label: skill, value: skill }))
        )
    router.replace({
      query: { view: state === 'left' ? 'projects' : 'skills' },
    })
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
