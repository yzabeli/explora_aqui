import { Router } from 'express'
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosContollers'
import { GruposControllers } from './Controllers/Grupos/GruposControllers'

const router = Router()
//usuarios
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarusuarios)
router.get('/ConsultarUsuarios', new UsuariosControllers().consultarUsuarios)
router.post('/ConsultarUsuarioUnico', new UsuariosControllers().consultarUsuariosUnico)
router.put('/AlterarDadosUsuarios', new UsuariosControllers().alterarDadosUsuarios)
router.delete('/DeletarUsuarios/:id', new UsuariosControllers().apagarUsuarios)

//grupos
router.post('/CadastrarGrupos', new GruposControllers().cadastrargrupos)
export default router