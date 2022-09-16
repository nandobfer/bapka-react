import { useFormik } from 'formik';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import './Login.scss';
import { useState } from 'react';
import axios from 'axios';
import config from '../../config.json'
import { useNavigate } from "react-router-dom"
import { MainContainer } from '../../components/MainContainer';


export const Login = () => {

    const navigate = useNavigate();

    const [errorCliente, setErrorCliente] = useState('');
    const [errorParceiro, setErrorParceiro] = useState('');
    const error_texts = {cliente: errorCliente, parceiro: errorParceiro}
    
    const tryLogin = (values) => {
        // alert(JSON.stringify(values, null, 2))
    
        // zera o texto de erro renderizado
        if (values.user_cliente) {
            setErrorCliente('');
            values.type = 'cliente';
            
        } else {
            setErrorParceiro('');
            values.type = 'parceiro';
    
        }
        console.log(values);
    
        // post request na api
        axios.post(`${config.api}/login/`, values).then((response) => {
            console.log(response.data)
    
            // renderiza mensagem de erro de login
            if (response.data.error) {
                if (values.user_cliente) {
                    setErrorCliente(response.data.error);
                } else {
                    setErrorParceiro(response.data.error);
                }
            } else {
                // ir pra próxima página
                // alert('login success: proxima pagina')
                if (values.user_cliente) {
                    navigate('/cliente/', {state: response.data})
                } else {
                    navigate('/parceiro/', {state: response.data})
                }
            };
    
        }).catch((error) => {
            console.log(`Erro: ${error}`);
        });
    }

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
            <MainContainer>
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
            </MainContainer>
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