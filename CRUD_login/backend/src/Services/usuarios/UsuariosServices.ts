import prismaClient from "../../prisma"
import {hash} from 'bcryptjs'

interface cadUsuarios {
  nome: string,
  email: string,
  password: string

}

interface AlterarUsuarios{
  id: string
  nome: string
  email: string
}

class UsuariosServices {
  async cadastrarUsuarios({ nome, email, password }: cadUsuarios) {

const senhaCrypt = await hash(password, 8)

    await prismaClient.cadastrarUsuarios.create({
      data: {
        nome: nome,
        email: email,
        senha: senhaCrypt
      }
    })
    return ({ dados: 'Cadastro Efetuado com Sucesso' })
  }

  async apagarUsuarios(id: string){
 
    await prismaClient.cadastrarUsuarios.delete({

        where:{

            id:id
        }
    })

    return ({dados: 'Registro Apagado com sucesso!'});
}

async consultarUsuarioUnico(id: string){
  const resposta = await prismaClient.cadastrarUsuarios.findFirst({
    where: {
      id: id
    },
    select: {
      nome: true,
      email:  true,
      senha: true

    }
  })
  return resposta
}


async alterarDadosUsuarios({id, nome, email}: AlterarUsuarios){
await prismaClient.cadastrarUsuarios.update({
  where:{
    id : id
  },
  data: {
    nome: nome,
    email: email
  }
})
return ({dados: 'Alterado com Sucesso'})
}

  async consultarUsuarios() {
    const resposta = await prismaClient.cadastrarUsuarios.findMany({
      select: {
        id: true,
        nome: true,
        email: true
      }
    })
    return resposta
  }
}

export { UsuariosServices }