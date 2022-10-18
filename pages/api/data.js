import { produtos } from "../../v1/produto";

export default function data(req, res) {

  if (req.method === 'GET') {
    //Dado estatico
    res.status(200).json({ produtos })

  } else {
    res.status(405).json({ msg: "Acesso negado!" })
  }
}