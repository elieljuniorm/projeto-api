import { MongoClient } from "mongodb";

const database_url = process.env.DATABASE_URL

const client = new MongoClient(database_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//exportação de conexão com banco
export default async function connect() {

    await client.connect()

    const db = client.db("projetoApi")

    return { db, client }
}
