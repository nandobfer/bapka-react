import { CustomButton } from '../CustomButton/CustomButton'
import './LoginForm.css'

export const LoginForm = ({type, placeholder, recovery}) => {
    return (
        <form className='login-form'>
            <h1>{type}</h1>
            <div className="input-field">
                <input type="text" placeholder={placeholder} />
                <input type="password" placeholder='Senha' />
            </div>
            <p className={`${recovery ? 'visible' : 'hidden'}`}>Esqueci minha senha</p>
            <div className="button-container">
                <CustomButton text='Entrar'/>
            </div>
        </form>
    )
}