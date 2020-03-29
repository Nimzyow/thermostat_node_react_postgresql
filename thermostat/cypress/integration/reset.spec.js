describe("reset", () => {
  it("click will reset temperature to 20", () => {
    cy.visit("/");
    cy.get(".borderUp")
      .click()
      .click();
    cy.get(".reset-container").click();
    cy.contains(20);
  });
});
