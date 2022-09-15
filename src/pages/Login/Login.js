import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import './Login.css';

export const Login = () => {

    const [errorCliente, setErrorCliente] = useState('');
    const [errorParceiro, setErrorParceiro] = useState('');

    const tryLogin = (values) => {
        // alert(JSON.stringify(values, null, 2))
        if (values.user_cliente) {
            setErrorCliente('');
            values.type = 'cliente';
            
        } else {
            setErrorParceiro('');
            values.type = 'parceiro';

        }
        console.log(values);
        axios.post('http://localhost:5000/login/', values).then((response) => {
            console.log(response.data)
            if (response.data.error) {
                if (values.user_cliente) {
                    setErrorCliente(response.data.error);
                } else {
                    setErrorParceiro(response.data.error);
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
            <div className="main-container">
                <img className='logo' src="/logo.webp" alt="logo" />
                <h2>Acesse seus cupons preechendo os campos abaixo</h2>

                <div className="forms-container">
                    <LoginForm 
                        title = 'Cliente'
                        placeholder ='Telefone'
                        recovery = {true}
                        formik={formik_cliente}
                        error={errorCliente}
                        />
                    <hr />
                    <LoginForm 
                        title = 'Parceiro'
                        placeholder='E-mail'
                        recovery = {false}
                        formik={formik_parceiro}
                        error={errorParceiro}
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