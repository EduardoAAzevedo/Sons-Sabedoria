var quizModel = require("../models/formModel");

function cadastrarResultado(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var points = req.body.pointsServer;
    var idUser = req.body.idUserServer;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrar(points, idUser)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao armazenar os pontos! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = {
    cadastrarResultado
}