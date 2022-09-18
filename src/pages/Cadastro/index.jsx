import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom'
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { CustomInput } from '../../components/CustomInput';
import { MainContainer } from '../../components/MainContainer';
import './style.scss'
import colors from '../../_colors.scss'
import { LoadingScreen } from '../../components/LoadingScreen';
import { useState } from 'react';
import { api } from '../../api';
import { NewClientForm } from '../../components/NewClientForm';

export const Cadastro = () => {

    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const parceiro = location.state;
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }


    return (
        <section>
            <LoadingScreen loading={loading} />
            <MainContainer>
                <section className="signup-page">
                    <div>
                        <img src="/logo.webp" alt="logo" />
                        <h1>Cadastro do cliente</h1>
                        <h2>Preencha os campos ao lado.</h2>
                        <p>Aqui você irá cadastrar os clientes que estão aptos a receber os cupons da promoção</p>
                        <div>
                            <CustomButton
                                text="Voltar"
                                action={goBack}
                                border={`0.2vw solid ${colors.background_color}`}
                            />
                        </div>
                    </div>
                    <NewClientForm 
                        parceiro={parceiro}
                        setLoading={setLoading}
                    />
                </section>
            </MainContainer>
        </section>
    )
}