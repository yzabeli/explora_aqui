import { Request, Response } from "express";
import { HierarquiaService } from "../../services/Hierarquia/HierarquiaServices";

class HierarquiaControllers{
    async cadastro_Hierarquia(req: Request, res: Response){
        const { nome, descricao } = req.body
        const hierarquiaServices = new HierarquiaService()
        const resposta = await hierarquiaServices.cadastrar_hierarquia({
           nome, 
           descricao 
        })
        return res.json(resposta)
    }
}
export {HierarquiaControllers}