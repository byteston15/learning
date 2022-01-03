const express = require("express");
const router = express.Router();
const {
  getCategorias,
  createCategoria,
  updateCategoria,
  deleteCategoria,
  getCategoria,
} = require("../controller/Categoria");

//Router
router.route("/").post(createCategoria).get(getCategorias);

router.route("/:id").put(updateCategoria).delete(deleteCategoria).get(getCategoria);

module.exports = router;
