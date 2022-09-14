import { LoginForm } from '../../components/LoginForm/LoginForm';
import './Login.css';

export const Login = () => {
    return (
        <div className="background">
            <div className="main-container">
                <img className='logo' src="/logo.webp" alt="logo" />
                <h2>Acesse seus cupons preechendo os campos abaixo</h2>

                <div className="forms-container">
                    <LoginForm 
                        type = 'Cliente'
                        placeholder ='Telefone'
                        recovery = {true}
                        />
                    <hr />
                    <LoginForm 
                        type = 'Parceiro'
                        placeholder='E-mail'
                        recovery = {false}
                    />
                </div>
                <div className="circle">
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