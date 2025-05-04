import express from "express";
import connect from "./config/dbConnnect.js";
import routes from "./routes/index.js";

const app = express();
app.use(express.json());
routes(app);

const conexao = await connect();
conexao.on("error", console.error.bind(console, "Erro de conexão:"));
conexao.once("open", () => {
console.log("Banco de dados conectado com sucesso!");
});



export default app;