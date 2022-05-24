/// <reference types="cypress" />

describe("todo-app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("can add new todo", () => {
    cy.get(".todo-list li").should("have.length", 0);
    cy.get("#new-todo").type("test");
    cy.get("#add-todo").click();
    cy.get(".todo-list li").should("have.length", 1);
    cy.get(".todo-list li").first().should("have.text", "test");
  });
});
