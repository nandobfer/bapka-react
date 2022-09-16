import { useLocation } from 'react-router-dom'

export const Cliente = () => {
    const location = useLocation()
    const cliente = location.state

    return (
        <p>Recuperar senha</p>
    )
}