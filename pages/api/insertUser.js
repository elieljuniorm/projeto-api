import connect from '../../model/database';


export default async function handler(req, res) {

    if (req.method === 'POST') {

        const { db } = await connect()

        const user = {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        }

        //retorna o dado do banco com base na pesquisa da const user
        const response = await db.collection("users").insertOne(user)

        res.status(200).json({ msg: "Usuário cadastrado com sucesso!" })
    } else{
        res.status(405).json({ msg: "Método não suportado!" })
    }
}