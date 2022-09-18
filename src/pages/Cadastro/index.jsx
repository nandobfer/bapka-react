import { useLocation } from 'react-router-dom'
import './style.scss'

export const Cadastro = () => {
    const location = useLocation();
    const parceiro = location.state;
    console.log(parceiro)
    return (
        <section>
            
        </section>
    )
}