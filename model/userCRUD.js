// Realiza operação de CRUD no APP.

//Login

import connect from "./database";

export default async function login(name, password) {
    const { db } = await connect()

    const user = {
        name: name,
        password: password,
    }

    const response = await db.collection("users").findOne(user)

    return response
}

//Cadastramento

//Alteração

//Exclusão