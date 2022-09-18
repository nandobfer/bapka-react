import { CustomButton } from '../CustomButton/CustomButton'
import './style.scss'
import colors from '../../_colors.scss'
import { useNavigate } from 'react-router-dom'

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
                    /> : null}
                </div>
            </div>
            <p className='exit-p' onClick={onExit}>Sair</p>
        </section>
    )
}