import  autor  from '../models/Autor.js';

class AutorController {
    static async listarAutores(req, res) {
        try {
        const autores = await autor.find({});
            res.status(200).json(autores);
        } catch (error) {
            res.status(500).json({ message: "Erro ao listar autores", error });
        }
    };

    static async listarAutoresPorId(req, res) {
        try {
            const autorId = req.params.id;
            const autorEncontrado = await autor.findById(autorId);
        } catch (error) {
            res.status(500).json({ message: `Autor ${autorEncontrado.nome} Erro ao listar o livro`, error });
        
    }
};

static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            await novoAutor.save();
            res.status(201).json({ message: `Autot ${novoAutor.nome} cadastrado com sucesso!`, autor: novoAutor });
        } catch (error) {
            res.status(500).json({ message: "Erro ao cadastrar autor", error});
    }
 };
 static async atualizarAutor(req, res) {
        try {
            const autorId = req.params.id;
            const autorAtualizado = await autor.findByIdAndUpdate(autorId, req.body);
            res.status(200).json({ message: `Autor ${autorAtualizado.nome} atualizado com sucesso!`, autor: autorAtualizado });
        } catch (error) {
            res.status(500).json({ message: "Erro ao atualizar autor", error });
        }
 };

 static async deletarAutor(req, res) {
        try {
            const autorId = req.params.id;
            await autor.findByIdAndDelete(autorId);
            res.status(200).json({ message: "Autor removido com sucesso!" });
        } catch (error) {
            res.status(500).json({ message: "Erro ao remover livro", error });
        }
    };

}
export default AutorController;