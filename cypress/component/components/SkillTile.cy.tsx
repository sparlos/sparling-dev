import SkillTile, { SkillTileProps } from '../../../components/SkillTile'
import { Skill, SkillName } from '../../../utils/skills'
import * as projectUitls from '../../../utils/projects'

const explandableDescriptionBoxSelector = '[data-cy=expandable-description-box]'

function setup(propOverrides?: Partial<SkillTileProps>) {
  const defaultMockSkill: Skill = {
    description: 'mock skill',
    name: 'Mock Skill Name' as SkillName,
  }

  const mockProps: SkillTileProps = {
    skill: defaultMockSkill,
    isSelected: false,
    onClick: cy.spy().as('onClickSpy'),
    onClickSkillLink: cy.spy().as('onClickSkillLinkSpy'),
    ...propOverrides,
  }

  cy.stub(projectUitls, 'getUniqueTags').returns([defaultMockSkill.name])
  cy.mount(<SkillTile {...mockProps} />)
  return mockProps
}

describe('<SkillTile>', function () {
  it('should render properly', () => {
    setup()
  })

  it('should not show the description if isSelected is false', () => {
    setup()
    cy.get(explandableDescriptionBoxSelector).should('not.be.visible')
  })

  it('should show the description if isSelected is true', () => {
    setup({
      isSelected: true,
    })
    cy.get(explandableDescriptionBoxSelector).should('be.visible')
  })

  it('should run the onClick function when the tile is clicked', () => {
    setup()
    cy.get('button').click()
    cy.get('@onClickSpy').should('have.been.calledOnce')
  })

  it('should show the see more projects link isSelected is true', () => {
    const { skill } = setup({
      isSelected: true,
    })
    cy.contains(`See projects using ${skill.name}`).should('be.visible')
  })

  it('should run the onClickSkillLink callback when the skill link is clicked', () => {
    const { skill } = setup({
      isSelected: true,
    })
    cy.contains(`See projects using ${skill.name}`).click()
    cy.get('@onClickSkillLinkSpy').should('have.been.calledOnce')
    cy.get('@onClickSkillLinkSpy').should('have.been.calledWith', skill.name)
  })
})
