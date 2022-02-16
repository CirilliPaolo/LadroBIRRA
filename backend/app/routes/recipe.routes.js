module.exports = (app) => {
  const recipes = require("../controllers/recipe.controller.js");

  var router = require("express").Router();

  // Create a new recipes
  router.post("/", recipes.create);

  // Retrieve all recipes
  router.get("/", recipes.findAll);

  // Retrieve all published recipes
  router.get("/published", recipes.findAllPublished);

  // Retrieve a single recipes with id
  router.get("/:id", recipes.findOne);

  // Update a recipes with id
  router.put("/:id", recipes.update);

  // Delete a recipes with id
  router.delete("/:id", recipes.delete);

  // Create a new recipes
  router.delete("/", recipes.deleteAll);

  app.use("/api/recipes", router);
};
