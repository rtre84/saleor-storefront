import { userBuilder } from "./generate";

export function createUser() {
  const user = userBuilder();
  return cy
    .request({
      body: user,
      method: "POST",
      url: "http://localhost:3000/graphql"
    })
    .then(response => response.body.user);
}

Cypress.Commands.add("createUser", createUser);
