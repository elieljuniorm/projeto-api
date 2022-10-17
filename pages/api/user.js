import connect from '../../model/database';


export default async function handler(req, res) {

    const { db } = await connect()

    const user = {
        name: req.body.name,
        password: req.body.password
    }

    //retorna o dado do banco com base na pesquisa da const user
    const response = await db.collection("users").findOne(user)

    res.status(200).json(response)
}