import prismaClient from "../../prisma";

interface cadGrupos{
    nome: string
}

class GruposServices{
    async cadastrarGrupos({nome}: cadGrupos){
        await prismaClient.cadastrarGrupos.create({
            data:{
                nome: nome
            }
        })
        return ({dados: 'Grupo Cadastrado com Sucesso'})
    }
}
export {GruposServices}