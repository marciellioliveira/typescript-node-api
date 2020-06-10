"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeController = void 0;
const express_1 = require("express");
const router = express_1.Router();
router.get("/", (req, res) => {
    //Responder com mensagem caso não receba parâmetro quando não receber parâmetro de nome
    res.send("Você precisa adicionar /nome para que a API funcione!");
});
router.get("/:name", (req, res) => {
    //Extrair o nome dos parâmetros de request
    let { name } = req.params;
    res.send(`Hello, ${name}`);
});
//Exportar a instância do express.Router()
exports.WelcomeController = router;
