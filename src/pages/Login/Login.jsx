import { useFormik } from 'formik';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import './Login.scss';


export const Login = ({tryLogin, error_texts}) => {

    const formik_cliente = useFormik({
        initialValues: {
            user_cliente: '',
            password_cliente: '',
        },
        onSubmit: values => tryLogin(values)
    });

    const formik_parceiro = useFormik({
        initialValues: {
            user_parceiro: '',
            password_parceiro: '',
        },
        onSubmit: values => tryLogin(values)
    });

    const onHelpClick = () => {
        alert('popup de ajuda')
    }

    return (
        <div className="background">
            <div className="main-container">
                <img className='logo' src="/logo.webp" alt="logo" />
                <h2>Acesse seus cupons preechendo os campos abaixo</h2>

                <div className="forms-container">
                    <LoginForm 
                        title = 'Cliente'
                        placeholder ='Telefone'
                        recovery = {true}
                        formik={formik_cliente}
                        error={error_texts.cliente}
                        />
                    <hr />
                    <LoginForm 
                        title = 'Parceiro'
                        placeholder='E-mail'
                        recovery = {false}
                        formik={formik_parceiro}
                        error={error_texts.parceiro}
                    />
                </div>
                <div className="circle" onClick={onHelpClick}>
                    <p>?</p>
                </div>
            </div>
            <img className='top-floating-img floating-img' src="/background_top.png" alt="Leite" />
            <img className='bottom-floating-img floating-img' src="/background_top.png" alt="Leite" />
            <img id='circle-1' className='floating-img floating-circle' src="/circulo_1.svg" alt="Leite" />
            <img id='circle-2' className='floating-img floating-circle' src="/circulo_1.svg" alt="Leite" />
            <img id='circle-3' className='floating-img floating-circle' src="/circulo_1.svg" alt="Leite" />
            <img id='circle-4' className='floating-img floating-circle' src="/circulo_1.svg" alt="Leite" />
            <img id='circle-5' className='floating-img floating-circle' src="/circulo_1.svg" alt="Leite" />
        </div>
    )
}