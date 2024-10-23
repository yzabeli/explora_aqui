import prismaClient from "../../prisma"


interface CadUsuarios{
    nome: string
    cpf: string
    telefone: string
    email: string
    password: string
    
}

class UsuariosServices {
async cadastrar_usuarios ({nome, cpf, telefone, email, password }: CadUsuarios){
  
const cpfExiste = await prismaClient.cadastroUsuarios.findFirst({
    where: {
        cpf : cpf
    }
})
if(cpfExiste){
    throw new Error ('cpf já esta cadastrado')
}

    await prismaClient.cadastroUsuarios.create({
        data:{
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            email:  email,
            senha: password
           
        }
    })
    return  ({dados: 'Cadastro Efetuado com Sucesso'})
}
async consultar_usuarios(){
        const resposta = await prismaClient.cadastroUsuarios.findMany({
            select: {
                nome: true,
                cpf: true,
                email: true
            }
            
        })
        return resposta
 }

}

export { UsuariosServices }