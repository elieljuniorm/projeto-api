import login from "../../../model/userCRUD"

export default async function userLogin(req, res) {

    const user = {
        name: req.body.name,
        password: req.body.password,
    }

    const response = await login(user.name, user.password)

    res.status(200).json(response)
}