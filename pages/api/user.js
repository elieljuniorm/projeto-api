import connect from '../../model/database';


export default async function handler(req, res){
    
    const {db} = await connect()

    const user = {
        name: "Eliel",
        password: "123456"
    }

    const response = await db.collection("users").findOne(user)

    res.status(200).json(response)
}