import livro from "../models/Livros.js";
import autor  from "../models/Autor.js";

class LivroController {
    static async listarLivros(req, res) {
        try {
            // Busca os livros e popula o campo "autor" com os dados completos do modelo "Autor"
            const livros = await livro.find().populate("autor");
            res.status(200).json(livros);
        } catch (error) {
            res.status(500).json({ message: "Erro ao listar livros", error });
        }
    }

    static async listarLivroPorId(req, res) {
        try {
            const livroId = req.params.id;
            // Busca o livro pelo ID e popula o campo "autor"
            const livroEncontrado = await livro.findById(livroId).populate("autor");
            if (!livroEncontrado) {
                return res.status(404).json({ message: "Livro não encontrado." });
            }
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({ message: "Erro ao listar o livro", error });
        }
    }

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            // Verifica se o autor existe no banco de dados
            const autorEncontrado = await autor.findById(novoLivro.autor);
            if (!autorEncontrado) {
                return res.status(404).json({ message: "Autor não encontrado." });
            }
    
            // Cria o livro com a referência ao autor
            const livroCriado = await livro.create(novoLivro);
            res.status(201).json({ 
                message: `Livro ${livroCriado.titulo} cadastrado com sucesso!`, 
                livro: livroCriado 
            });
        } catch (error) {
            res.status(500).json({ message: `Erro ao cadastrar livro: ${error.message}`, error });
        }

}
 static async atualizarLivro(req, res) {
        try {
            const livroId = req.params.id;
            const livroAtualizado = await livro.findByIdAndUpdate(livroId, req.body);
            res.status(200).json({ message: `Livro ${livroAtualizado.titulo} atualizado com sucesso!`, livro: livroAtualizado });
        } catch (error) {
            res.status(500).json({ message: "Erro ao atualizar livro", error });
        }
 };

 static async deletarLivro(req, res) {
        try {
            const livroId = req.params.id;
            await livro.findByIdAndDelete(livroId);
            res.status(200).json({ message: "Livro removido com sucesso!" });
        } catch (error) {
            res.status(500).json({ message: "Erro ao remover livro", error });
        }
    };

}
export default LivroController;