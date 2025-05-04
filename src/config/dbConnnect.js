import mongoose from 'mongoose';

async function connect() {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("Conectado ao MongoDB Atlas");
    return mongoose.connection;
}

export default connect;