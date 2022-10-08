import BigToggle, { BigToggleProps } from '../../../components/BigToggle'

function setup(propOverrides?: Partial<BigToggleProps>) {
  const mockProps: BigToggleProps = {
    isPreToggled: false,
    setToggleState: cy.spy().as('setToggleStateSpy'),
    toggleLeftText: 'left',
    toggleRightText: 'right',
    toggleState: null,
    shrinkOnSelect: true,
    ...propOverrides,
  }

  cy.mount(<BigToggle {...mockProps} />)
}

describe('<BigToggle>', function () {
  it('should render properly', () => {
    setup()
  })

  it('should run setToggleState with the correct argument', () => {
    setup()
    cy.contains('right').click()
    cy.get('@setToggleStateSpy').should('have.been.calledWith', 'right')
    cy.contains('left').click()
    cy.get('@setToggleStateSpy').should('have.been.calledWith', 'left')
    cy.get('@setToggleStateSpy').should('have.been.calledTwice')
  })

  it('should display the passed in left & right text', () => {
    const mockLeftText = 'mockLeftText'
    const mockRightText = 'mockRightText'
    setup({
      toggleLeftText: mockLeftText,
      toggleRightText: mockRightText,
    })

    cy.contains(mockLeftText).should('be.visible')
    cy.contains(mockRightText).should('be.visible')
  })
})
