import login from "../../model/userCRUD"

export default async function userLogin(req, res) {

    if (req.method === 'GET') {
        const user = {
            name: req.body.name,
            password: req.body.password,
        }

        const response = await login(user.name, user.password)

        res.status(200).json(response)

    } else {
        res.status(405).json({ msg: "Método não suportado!" })
    }
}