describe("switching power save", () => {
  it("off will let us reach a temperature of 30", () => {
    cy.visit("/");
    cy.get(".powerSaving-container").click();
    for (let i = 0; i < 10; i++) {
      cy.get(".borderUp").click();
    }
    cy.contains(30);
  });
});
