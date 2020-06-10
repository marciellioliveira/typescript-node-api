import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  //Responder com mensagem caso não receba parâmetro quando não receber parâmetro de nome
  res.send("Você precisa adicionar /nome para que a API funcione!");
});

router.get("/:name", (req: Request, res: Response) => {
  //Extrair o nome dos parâmetros de request
  let { name } = req.params;

  res.send(`Hello, ${name}`);
});

//Exportar a instância do express.Router()
export const WelcomeController: Router = router;
