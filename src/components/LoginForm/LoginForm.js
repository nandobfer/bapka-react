import { CustomButton } from '../CustomButton/CustomButton'
import './LoginForm.css'

export const LoginForm = ({title, placeholder, recovery, formik, error}) => {
    const user_value = `user_${title.toLowerCase()}`
    const password_value = `password_${title.toLowerCase()}`

    const onRecoverPasswordClick = () => {
        alert('ir pra recuperação de senha')
    }

    return (
        <form onSubmit={formik.handleSubmit} className='login-form'>
            <h1>{title}</h1>
            <div className="input-field">
                <input 
                    id={user_value} 
                    name={user_value} 
                    type="text" placeholder={placeholder} 
                    onChange={formik.handleChange}
                    value={formik.values.user_value}
                    required 
                />

                <input 
                    id={password_value} 
                    name={password_value} 
                    type="password" placeholder='Senha' 
                    onChange={formik.handleChange}
                    value={formik.values.password_value}
                    required 
                />
            </div>
            <p className={`${recovery ? 'visible link' : 'hidden link'}`} onClick={onRecoverPasswordClick}>Esqueci minha senha</p>
            <div className="button-container">
                <CustomButton text='Entrar' />
            </div>
            <p className='error-text'>{error}</p>
        </form>
    )
}