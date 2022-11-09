import connect from '../../model/database';


export default async function handler(req, res) {

    if (req.method === 'DELETE') {

        const { db } = await connect()

        const user = {
            id: req.body._id
        }

        //retorna o dado do banco com base na pesquisa da const user
        const response = await db.collection("users").findOneAndRemove(user)

        res.status(200).json({msg: "Cadastro excluido"})

    } else {
        res.status(405).json(response)
    }
}