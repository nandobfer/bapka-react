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

export const Cadastro = () => {

    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const parceiro = location.state;
    const navigate = useNavigate();
    let inputs = [];

    const goBack = () => {
        navigate(-1);
    }

    const formik = useFormik({
        initialValues: {
            input_nome: '',
            input_telefone: '',
            input_email: '',
            input_cpf: '',
            input_senha: '',
            input_confirmacao: '',
        },
        onSubmit: values => sendSignUpForm(values),
    });

    const buildInputs = () => {
        for (let key in formik.values) {
            let input = key;
            inputs.push(input);
        }
        console.log(inputs);
    }
    buildInputs();

    const sendSignUpForm = (values) => {
        setLoading(true);
        const data = {
            id: parceiro.id,
            cliente: values
        };
        console.log(data);

        api.post('/new_client/', data).then((response) => {
            console.log(response.data);
            if (response.data.error) {
                alert(response.data.error);
            } else {
                alert(`Sucesso: ${response.data}`);
            }
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            alert(error);
            setLoading(false);
        })

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
                    <form onSubmit={formik.handleSubmit}>
                        {inputs.map(item => {
                            return (
                                <CustomInput
                                    id={item}
                                    type='text'
                                    placeholder={`${item.split('_')[1][0].toUpperCase()}${item.split('_')[1].slice(1)}`}
                                    formik={formik}
                                    key={inputs.indexOf(item)}
                                />
                            )
                        })}
                        <div>
                            <CustomButton
                                text='Cadastrar cliente'
                            />
                        </div>
                    </form>
                </section>
            </MainContainer>
        </section>
    )
}