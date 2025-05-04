import express from "express";
import connect from "./config/dbConnnect.js";
import livros from "./models/Livros.js";

const app = express();


const conexao = await connect();
conexao.on("error", console.error.bind(console, "Erro de conexão:"));
conexao.once("open", () => {
console.log("Banco de dados conectado com sucesso!");
});



app.use(express.json());


const PORT = process.env.PORT || 3000;



 app.get("/", async (req, res) => {
    res.status(200).send("Pagina\n");
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livros.find({});
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {

const index = buscarLivro(req.params.id);

    if (index === -1) {
        res.status(404).send("Livro não encontrado!");
    } else {
        res.status(200).json(livros[index]);
    }
});

app.post("/livros", (req, res) => {

    const livro = req.body;
    livros.push(req.body);
    res.status(201).send(`Livro ${livro.titulo} adicionado com sucesso!`);
});

app.put("/livros/:id", (req, res) => {
    const index = buscarLivro(req.params.id);

    if (index === -1) {
        res.status(404).send("Livro não encontrado!");
    } else {
        livros[index].titulo = req.body.titulo;
        res.status(200).send(`Livro ${livros[index].titulo} atualizado com sucesso!`);
    }
});

app.delete("/livros/:id", (req, res) => {
    const index = buscarLivro(req.params.id);

    if (index === -1) {
        res.status(404).send("Livro não encontrado!");
    } else {
        livros.splice(index, 1);
        res.status(200).send("Livro removido com sucesso!");
    }
});

//mongodb+srv://nathalisboa:123456782@#$@cluster0.zynvkuv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
export default app;