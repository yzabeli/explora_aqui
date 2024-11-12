import prismaClient from "../../prisma"
import { hash } from 'bcryptjs'
import { compare } from 'bcryptjs'

interface CadUsuarios {
    nome: string
    cpf: string
    telefone: string
    email: string
    password: string

}

class UsuariosServices {
    async cadastrar_usuarios({ nome, cpf, telefone, email, password }: CadUsuarios) {
        const usuario = await prismaClient.cadastroUsuarios.findFirst({
            where: {
                email: email
            }
        })
        const cpfExiste = await prismaClient.cadastroUsuarios.findFirst({
            where: {
                cpf: cpf
            }
        })
        if (cpfExiste) {
            throw new Error('cpf já esta cadastrado')
        }

        const passCrypt = await hash(password, 8)

        await prismaClient.cadastroUsuarios.create({
            data: {
                nome: nome,
                cpf: cpf,
                telefone: telefone,
                email: email,
                senha: passCrypt

            }
        })
        return ({ dados: 'Cadastro Efetuado com Sucesso' })
    }
    async consultar_usuarios() {
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