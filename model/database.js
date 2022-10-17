//conectando banco
import { MongoClient } from "mongodb";

//var env para usuario e senha
const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD

const client = new MongoClient(`mongodb+srv://${db_user}:${db_password}@cluster0.dck2iwv.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//exportação de conexão com banco
export default async function connect() {

    await client.connect()

    const db = client.db("projetoApi")

    return { db, client }
}
