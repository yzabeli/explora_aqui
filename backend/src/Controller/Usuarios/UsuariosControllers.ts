import { Request, Response } from "express";
import { UsuariosServices } from "../../services/Usuarios/UsuariosService";

class UsuariosControllers{
    async cadastro_Usuarios(req: Request, res: Response){
        const {nome, email, password } = req.body
       const usuariosService = new UsuariosServices()
       const resposta = await usuariosService.cadastrar_usuarios({
        nome,
        email,
        password
       })
       return res.json(resposta)
    }

    async consultar_usuarios(req: Request, res: Response){
        const usuariosService = new UsuariosServices()
        const resposta = await usuariosService.consultar_usuarios()
        return res.json(resposta)
    }
}

export {UsuariosControllers}