import { CustomButton } from '../CustomButton/CustomButton'
import './style.scss'
import colors from '../../_colors.scss'

export const AreaTitle = ({user_type, button}) => {

    const onExit = () => {
        window.location.href = '/'
    }
    
    return (
        <section className='area-title-container'>
            <div>
                <h2>Área do {user_type}</h2>
                <div className="button">
                    <CustomButton 
                        text={button.text}
                        border={`0.2vw solid ${colors.background_color}`} 
                        action={button.action}
                    />
                </div>
            </div>
            <p className='exit-p' onClick={onExit}>Sair</p>
        </section>
    )
}