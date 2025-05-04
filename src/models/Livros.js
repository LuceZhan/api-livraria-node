import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    titulo: {
        type: String,
        required: true,
    },
    editora: {
        type: String,
        required: true,
    },
    anoPublicacao: {
        type: Number,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Autor",
        required: true,
    },

}, {versionKey: false});


const livro = mongoose.model("livros", livroSchema);

export default livro;