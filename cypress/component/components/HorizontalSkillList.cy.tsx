import HorizontalSkillList, {
  HorizontalSkillListProps,
} from '../../../components/HorizontalSkillList'
import { Skill, SkillName } from '../../../utils/skills'

const leftSkillsSelector = '[data-cy=left-skills]'
const rightSkillsSelector = '[data-cy=right-skills]'

function getMockSkills(numberOfSkills = 6) {
  const mockSkills: Skill[] = []

  for (let i = 0; i < numberOfSkills; i++) {
    const mockSkill: Skill = {
      description: `Mock skill ${i + 1} description`,
      name: `Mock Skill ${i + 1}` as SkillName,
    }
    mockSkills.push(mockSkill)
  }
  return mockSkills
}

function setup(propOverrides?: Partial<HorizontalSkillListProps>) {
  const mockProps: HorizontalSkillListProps = {
    selectedSkill: null,
    setSelectedSkill: cy.spy().as('setSelectedSkillSpy'),
    skills: getMockSkills(),
    onClickSkillLink: cy.spy(),
    ...propOverrides,
  }

  cy.mount(<HorizontalSkillList {...mockProps} />)
  return mockProps
}

describe('<HorizontalSkillList>', () => {
  it('should render properly', () => {
    setup()
  })

  it('should render two separate lists of skills, split up correctly', () => {
    setup()
    cy.get(leftSkillsSelector)
      .should('contain', 'Mock Skill 1')
      .and('contain', 'Mock Skill 2')
      .and('contain', 'Mock Skill 3')
      .and('not.contain', 'Mock Skill 4')
      .and('not.contain', 'Mock Skill 5')
      .and('not.contain', 'Mock Skill 6')

    cy.get(rightSkillsSelector)
      .should('contain', 'Mock Skill 4')
      .and('contain', 'Mock Skill 5')
      .and('contain', 'Mock Skill 6')
      .and('not.contain', 'Mock Skill 1')
      .and('not.contain', 'Mock Skill 2')
      .and('not.contain', 'Mock Skill 3')
  })

  it('should call setSelectedSkill on click of a skill with the correct argument', () => {
    const mockSkill: Skill = {
      name: 'mock skill' as SkillName,
      description: 'this is a mock skill',
    }

    setup({
      skills: [mockSkill],
    })
    cy.contains(mockSkill.name).click()
    cy.get('@setSelectedSkillSpy').should('have.been.calledOnce')
    cy.get('@setSelectedSkillSpy').should('have.been.calledWith', mockSkill)
  })

  it('should set selectedSkill to null if click on currently selected skill', () => {
    const mockSkill: Skill = {
      name: 'mock skill' as SkillName,
      description: 'this is a mock skill',
    }

    setup({
      selectedSkill: mockSkill,
      skills: [mockSkill],
    })
    cy.contains(mockSkill.name).click()
    cy.get('@setSelectedSkillSpy').should('have.been.calledOnce')
    cy.get('@setSelectedSkillSpy').should('have.been.calledWith', null)
  })
})
