import { Router } from 'express'

import { UsuariosControllers } from './Controller/LoginUsuarios/UsuariosControllers'
import { ExcursoesControllers } from './Controller/Excursoes/ExcursoesControllers'
import { FuncionariosControllers } from './Controller/Funcionarios/FuncionariosController' 
import { HierarquiaControllers } from './Controller/Hierarquia/HierarquiaControllers'
import { ReservaControllers } from './Controller/Reserva/ReservaControllers'

const router = Router()
//usuarios
router.post('/CadastroUsuarios', new UsuariosControllers().cadastro_Usuarios)
router.get('/ConsultarUsuarios', new UsuariosControllers().consultar_usuarios)
//excursoes
router.post('/CadastroExcursoes', new ExcursoesControllers().cadastro_Excursoes)
router.get('/ConsultarExcursoes', new ExcursoesControllers().consultar_excursoes)
//funcionarios
router.post('/cadastroFuncionarios', new FuncionariosControllers().cadastro_Funcionarios)
router.get('/consultarFuncionarios', new FuncionariosControllers().consultar_usuarios)
 //hierarquia
 router.post('/CadastroHierarquia', new HierarquiaControllers().cadastro_Hierarquia)
 //reserva
 router.post('/FazerReserva', new ReservaControllers().fazer_Reserva)
 router.get('/consultarReserva', new ReservaControllers().consultar_reserva)

export default router