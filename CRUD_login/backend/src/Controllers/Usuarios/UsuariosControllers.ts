import { Request, Response } from 'express'

import { UsuariosServices } from '../../Services/Usuarios/UsuariosServices'
import { LoginServices } from '../../Services/Login/LoginServices'

class UsuariosControllers {
    async cadastrarUsuarios(req: Request, res: Response) {
        const { nome, email, password } = req.body
        const enviarDadosServices = new UsuariosServices()
        const resposta = await enviarDadosServices.cadastrarUsuarios({
            nome,
            email,
            password
        })
        return res.json(resposta)
    }

    async consultarUsuarios(req: Request, res: Response) {
        const enviarDadosServices = new UsuariosServices()
        const resposta = await enviarDadosServices.consultarUsuarios()
        return res.json(resposta)
    }

    async consultarUsuariosUnico(req: Request, res: Response) {
        const { id } = req.body
        const enviarDadosServices = new UsuariosServices()
        const resposta = await enviarDadosServices.consultarUsuariosUnico(id)
        return res.json(resposta)
    }

    async alterarDadosUsuarios(req: Request, res: Response) {
        const { id, nome, email } = req.body
        const enviarDadosServices = new UsuariosServices()
        const resposta = await enviarDadosServices.alterarDadosUsuarios({
            id,
            nome,
            email
        })
        return res.json(resposta)
    }

    async apagarUsuarios(req: Request, res: Response) {
        const { id } = req.params
        const enviarDadosServices = new UsuariosServices()
        const resposta = await enviarDadosServices.apagarUsuarios(id)
        return res.json(resposta)
    }

    async verificaToken(req: Request, res: Response){
        const id = req.usuarioId
        const enviarDadosServices = new LoginServices()
        const resposta = await enviarDadosServices.verificaToken(id)
        return res.json(resposta)
    }
}

export { UsuariosControllers }