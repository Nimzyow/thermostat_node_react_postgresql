describe("up button", () => {
  it("increases the temperature by one", () => {
    cy.visit("/");
    cy.get(".borderUp").click();
    cy.contains(21);
  });
});

describe("down button", () => {
  it("decreases temperature by one", () => {
    cy.visit("/");
    cy.get(".borderDown").click();
    cy.contains(19);
  });
});
