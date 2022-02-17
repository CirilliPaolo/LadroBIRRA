import * as recipes from "../controllers/recipeController";
import express from "express";

// module.exports = (app: any) => {
//   var router = require("express").Router();

//   // Create a new recipes
//   router.post("/", recipes.create);

//   // // Retrieve all recipes
//   // router.get("/", recipes.findAll);

//   // // Retrieve all published recipes
//   // router.get("/published", recipes.findAllPublished);

//   // // Retrieve a single recipes with id
//   // router.get("/:id", recipes.findOne);

//   // // Update a recipes with id
//   // router.put("/:id", recipes.update);

//   // // Delete a recipes with id
//   // router.delete("/:id", recipes.delete);

//   // // Create a new recipes
//   // router.delete("/", recipes.deleteAll);

//   app.use("/api/recipes", router);
// };
const router = express.Router();

export const recipeRoutes = (app: typeof express) => {
  router.post("/", recipes.create);

  app().use("/api/recipes", router);
};
