import { Request, Response } from "express";
import { GruposServices } from "../../Services/Grupos/GruposServices";


class GruposControllers {
    async cadastrargrupos(req: Request, res: Response) {
        const {nome} = req.body
        const enviargruposServices = new GruposServices()
        const resposta = await enviargruposServices.cadastrarGrupos({
            nome
        })
        return res.json(resposta)
    }
}

export { GruposControllers}