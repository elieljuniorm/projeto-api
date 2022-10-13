function data(req, res) {

  const envNome = process.env.NOME_AMBIENTE;

  res.status(200).json({ nome: envNome })

}
/* Codigo para gerenciamento de cache para consumo de banco.
 response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate'); */
export default data