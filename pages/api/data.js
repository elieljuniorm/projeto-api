function data(req, res) {

  const envNome = process.env.NOME_AMBIENTE;

  res.status(200).json({ nome: envNome })
  
}

export default data