import { Request, Response } from "express";

import { UsuariosServices } from "../../Services/usuarios/UsuariosServices";

class UsuariosControllers{
 async cadastrarusuarios(req: Request, res: Response){
    const { nome, email, password } = req.body
    const enviardadosServices = new UsuariosServices()
    const resposta = await enviardadosServices.cadastrarUsuarios({
      nome,
      email,
      password
       })
       return res.json(resposta)
 }
 async consultarUsuarios(req: Request, res: Response){
  const enviardadosServices = new UsuariosServices()
  const resposta = await enviardadosServices.consultarUsuarios()
  return res.json(resposta)
 }

}

export { UsuariosControllers}