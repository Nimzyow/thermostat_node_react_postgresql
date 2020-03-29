describe("outsideTemp", () => {
  it("select a city and have it displayed", () => {
    cy.visit("/");
    cy.get(".citySelection").select("Kyoto");
    cy.contains("Kyoto,jp");
  });
});
