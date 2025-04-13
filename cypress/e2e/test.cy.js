

describe('Form component', () => {
  beforeEach(() => {

    cy.visit("http://localhost:3000/saved")

  })

  it("should have p with text", () => {
    cy.get(".book-header").should("contain", "´The best books… are those that tell you what you know already.´")
  })

  it("should have form", ()=> {
    cy.get(".form").should("exist")
  })

  it("should display empty message", () => {
    cy.get(".empty").should("contain", "Your storage is empty")
  })

  
  it("should display error messages when clicked", () => {
    cy.get("button[type='submit']").click()

    cy.get('.error').should('have.length', 3);
    cy.get('.error').eq(0).should('contain', "Required")
  })

  it('the fields should show error messages when the fields are shorts', () => {
    cy.get("#name").type("ho")
    cy.get("#autor").type("ho")
    cy.get("#description").type("hola me")
    cy.get(".form").submit()

    cy.get('.error').eq(0).should('contain', "The field must be at least 3 caracteres")
    cy.get('.error').eq(1).should('contain', "The field must be at least 3 caracteres")
    cy.get('.error').eq(2).should('contain', "The field must be at least 10 caracteres")


  })


})

