import { Router } from 'express'

import { UsuariosControllers } from './Controller/Usuarios/UsuariosControllers'
 
const router = Router()

router.post('/CadastroUsuarios', new UsuariosControllers().cadastro_Usuarios)
router.get('/ConsultarUsuarios', new UsuariosControllers().consultar_usuarios)
 
export default router