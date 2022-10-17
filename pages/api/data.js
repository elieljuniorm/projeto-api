import { produtos } from "../../v1/produto";

//Dado estatico
export default function data(req, res) {
  res.status(200).json({ produtos })
}