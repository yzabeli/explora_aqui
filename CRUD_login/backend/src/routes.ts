import { Router } from 'express'
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosContollers'
import { GruposControllers } from './Controllers/Grupos/GruposControllers'

const router = Router()
//usuarios
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarusuarios)
router.get('/ConsultarUsuarios', new UsuariosControllers().consultarUsuarios)
//grupos
router.post('/CadastrarGrupos', new GruposControllers().cadastrargrupos)
export default router