/// <reference types="jest" />

import { isDuplicate } from "./todo-app.js";

describe("todo-app", () => {
  it("check for duplicate", () => {
    const todos = [{ todo: "test", done: false }];
    const newTodo = "test";
    const r = isDuplicate(newTodo, todos);
    expect(r).toBe(true);
  });
});
