import connect from '../../model/database';


export default async function handler(req, res) {

    if (req.method === 'DELETE') {

        const { db } = await connect()

        const Users = db.collection("users")

        const mongo = require('mongodb')

        const user = { "_id" : new mongo.ObjectId(req.body.id) }
        
        //retorna o dado do banco com base na pesquisa da const user
        try {
            const response = await Users.deleteOne(user)
            if (response.deletedCount == 0) {
                response.message = "Não foi possível excluir o usuário."
                res.status(500).json(response)
            } else {
                response.message = "Usuário excluído com sucesso!"
                res.status(200).json(response)
            }
        } catch (e) {
            console.log(e);
        }

        
        
    } else{
        res.status(405).json({ msg: "Método não suportado!" })
    }
}