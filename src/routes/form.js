var express = require("express");
var router = express.Router();
var formController = require("../controllers/formController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarResultado", function (req, res) {
    formController.cadastrarResultado(req, res);
})

module.exports = router;