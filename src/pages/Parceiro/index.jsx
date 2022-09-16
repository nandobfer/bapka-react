import { useLocation } from 'react-router-dom'
import { MainContainer } from '../../components/MainContainer'
import './style.scss'

export const Parceiro = () => {

    const location = useLocation()
    const parceiro = location.state;
    console.log(parceiro)

    return (
        <section>
            <MainContainer>

            </MainContainer>
        </section>
    )
}