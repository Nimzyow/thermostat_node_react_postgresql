describe("power save", () => {
  it("off will let us reach a temperature of 30", () => {
    cy.visit("/");
    cy.get(".powerSaving-container").click();
    for (let i = 0; i < 10; i++) {
      cy.get(".borderUp").click();
    }
    cy.contains(30);
  });

  it("on will only allow user to reach a temperature of 25", () => {
    cy.visit("/");
    for (let i = 0; i < 10; i++) {
      cy.get(".borderUp").click();
    }
    cy.contains(25);
  });

  it("will go to minimum of 10 no matter what power save mode we are on", () => {
    cy.visit("/");
    for (let i = 0; i < 10; i++) {
      cy.get(".borderDown").click();
    }
    cy.contains(10);
  });
});
