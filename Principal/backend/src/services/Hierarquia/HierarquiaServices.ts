import prismaClient from "../../prisma";

interface CadHierarquia{
    nome: string
    descricao: string
}

class HierarquiaService {
    async cadastrar_hierarquia ({nome, descricao}: CadHierarquia){
        const verificarHierarquia = await prismaClient.cadastroHierarquia.findFirst({
            where: {
                nome: nome
            }
        })
 
        if (verificarHierarquia) {
            throw new Error("Hierarquia ja Cadastrada");
           
        }
        const resposta = await prismaClient.cadastroHierarquia.create({
            data:{
                nome: nome,
                descricao: descricao
            }
        })
        return ({dados: 'Hierarquia Cadastrada'})
    }

}

export { HierarquiaService}