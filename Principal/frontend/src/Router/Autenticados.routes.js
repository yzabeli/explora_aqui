import {BrowserRouter, Route, Routes} from 'react-router-dom'

    import DashboardEmpresa from '../Dashboard/Empresa'

    export default function Autenticados(){
        return(
            <BrowserRouter>
            <Routes>
            <Route path='/' element={<DashboardEmpresa />} />
            
            
            <Route path='*' element={<DashboardEmpresa />} />
            </Routes>
            </BrowserRouter>
        )
    }

                                               