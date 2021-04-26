/// <reference types="cypress" />

require("dotenv").config({ path: ".env.local" });
const MongoClient = require("mongodb").MongoClient;

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on("task", {
    async deleteSignUpTestUser() {
      const client = new MongoClient(process.env.MONGODB_URI);

      try {
        await client.connect();
        return client
          .db()
          .collection("users")
          .deleteOne({ username: "signUpTestUsername" });
      } catch (e) {
        cy.log(e);
      } finally {
        await client.close();
      }
    },
  });
};
