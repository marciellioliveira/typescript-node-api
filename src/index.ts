//Ler o controller e expor as rotas da API
import * as express from "express";
import * as bodyParser from "body-parser";
import { WelcomeController } from "./welcome.controller";

//Criar uma nova instância de aplicação express
const app: express.Application = express();

//Ajustar para que seja suportados os tipos de dados application/json
app.use(bodyParser.json());

//Ajustar para que seja suportado application/x-www-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));

//Somar o WelcomeController a rota /welcome
app.use("/welcome", WelcomeController);

//A porta pela qual o app express vai ser ouvida
const port = process.env.PORT || 3000;

//Servir a aplicação a porta dada acima
app.listen(port, () => {
  //Callback de sucesso
  console.log(`Listening at http://localhost:${port}/`);
});
