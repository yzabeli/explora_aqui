import { Request, Response } from "express"
 
import { UsuariosServices } from "../../Services/usuarios/UsuariosServices"
 
class UsuariosControllers{
 async cadastrarusuarios(req: Request, res: Response){
    const { nome, email, password} = req.body
    const enviardadosservices = new UsuariosServices()
    const resposta = await enviardadosservices.cadastrarUsuarios({
        nome,
        email,
        password
    })
    return res.json(resposta)
 }
async consultarUsuariosUnico (req: Request, res: Response){
  const { id } = req.body
    const enviarDadosServices = new UsuariosServices()
    const resposta = await enviarDadosServices.consultarUsuarioUnico(id)
    return res.json(resposta)
} 

async alterarDadosUsuarios (req: Request, res: Response){
  const {id, nome, email } = req.body
  const enviarDadosServices = new UsuariosServices()
  const resposta = await enviarDadosServices.alterarDadosUsuarios({
    id,
     nome,
      email
  })
  return res.json(resposta)
  
}
 
   async consultarUsuarios(req: Request, res: Response){
     const enviardadosservices = new UsuariosServices()
     const resposta = await enviardadosservices.consultarUsuarios()
     return res.json(resposta)
   }
   async apagarUsuarios(req: Request, res: Response){
 
    const {id} = req.params;
    const deletarUsuarios = new UsuariosServices();
    const resposta = await deletarUsuarios.apagarUsuarios(id);
 
    return res.json(resposta);
   
}
 
}
 
export { UsuariosControllers }