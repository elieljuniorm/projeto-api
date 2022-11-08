// Realiza operação de CRUD no APP.

//Login

import connect from "./database";

export default async function login(name, password) {
    const { db } = await connect()

    const user = {
        name: name,
        password: password,
    }

    //Restira a senha da resposta
    const opcoes = {
        projection: {
            password: false
        }
    }

    const response = await db.collection("users").findOne(user, opcoes)

    return response
}

//Cadastramento

//Alteração

//Exclusão