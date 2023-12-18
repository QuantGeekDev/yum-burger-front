describe("Given a Burgers Page", () => {
  describe("When the user clicks on the new Burger link", () => {
    it("Then he should be able to fill in the form and add a new burger", () => {
      cy.visit("/home");

      cy.get("a")
        .contains(/add burger/i)
        .click();

      cy.get("label").contains(/name/i).click().type("Ivan Burger");
      cy.get("label")
        .contains(/image url/i)
        .click()
        .type(
          "https://res.cloudinary.com/derffxqir/image/upload/w_250,h_250,c_fill,f_auto,q_auto/f4oag9jeumyadkcbkdh2",
        );

      cy.get("label")
        .contains(/ingredients/i)
        .click()
        .type("Egg, Meat, Salad, Tomato");

      cy.get("label").contains(/price/i).type("{backspace}12");
      cy.get("label")
        .contains(/calories/i)
        .type("{backspace}750");
      cy.get("label")
        .contains(/has gluten free option/i)
        .click();
      cy.get("label")
        .contains(/is it vegan?/i)
        .click();

      cy.get("button")
        .contains(/add burger/i)
        .click();

      cy.contains(/loading/i).should("exist");

      cy.contains(/burger added succesfully/i).should("exist");

      cy.get("h2")
        .contains(/ivan burger/i)
        .should("exist")
        .closest("article")
        .within(() => {
          cy.get("button")
            .contains(/delete/i)
            .click()
            .should("not.exist");
        });

      cy.contains(/burger deleted succesfully/i).should("exist");
      cy.contains(/loading/i).should("not.exist");
    });
  });
});
