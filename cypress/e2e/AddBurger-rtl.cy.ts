describe("Given a Burgers Page", () => {
  describe("When the user clicks on the new Burger link", () => {
    it("Then he should be able to fill in the form and add a new burger", () => {
      cy.visit("/home");
      cy.findByRole("link", { name: "Add Burgers" }).click();
      cy.findByLabelText("Name").type("Alex Burger");
      cy.findByLabelText("Image URL").type("https://google.com/test");
      cy.findByLabelText("Ingredients").type("Bun, Ham, Lettuce");
      cy.findByLabelText("Price").type("{backspace} 50");
      cy.findByLabelText("Calories").type("{backspace} 560");
      cy.findByRole("button", { name: "Add Burger" }).click();
      cy.findByText("Alex Burger").should("exist");
      cy.findByText("Burger added succesfully").should("exist");
    });
  });
});
