import { CustomButton } from '../CustomButton/CustomButton'
import { useNavigate } from 'react-router-dom'
import './style.scss'

export const AreaTitle = ({user_type, button}) => {

    const navigate = useNavigate();

    const onExit = () => {
        navigate('/')
    }
    
    return (
        <section className='area-title-container'>
            <div>
                <h2>Área do {user_type}</h2>
                <div className="button">
                    {button ? <CustomButton 
                        text={button.text}
                        border='0.2vw' 
                        action={button.action}
                        width={button.width}
                        deactivated={button.deactivated}
                    /> : null}
                </div>
            </div>
            <p className='exit-p' onClick={onExit}>Sair</p>
        </section>
    )
}