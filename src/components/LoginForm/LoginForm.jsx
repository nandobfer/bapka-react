import { CustomButton } from '../CustomButton/CustomButton'
import { useNavigate } from "react-router-dom"
import './LoginForm.scss'
import { CustomInput } from '../CustomInput'

export const LoginForm = ({title, placeholder, recovery, formik, error}) => {
    const user_value = `user_${title.toLowerCase()}`
    const password_value = `password_${title.toLowerCase()}`

    const navigate = useNavigate()
    const onRecoverPasswordClick = () => {
        navigate('/recuperar_senha/')
    }

    return (
        <form onSubmit={formik.handleSubmit} className='login-form'>
            <h1>{title}</h1>
            <div className="input-field">
                <CustomInput 
                    id={user_value} 
                    name={user_value} 
                    type="text" 
                    placeholder={placeholder} 
                    formik={formik}
                    onChange={formik.handleChange}
                    value={formik.values.user_value}
                    required={true}
                />

                <CustomInput
                    id={password_value} 
                    name={password_value} 
                    type="password" 
                    placeholder='Senha' 
                    formik={formik}
                    onChange={formik.handleChange}
                    value={formik.values.password_value}
                    required={true}
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