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
    const [new_client, setNew_client] = useState(false);
    const [not_so_new_client, setNot_so_new_client] = useState(false);
    const location = useLocation();
    const parceiro = location.state;
    const navigate = useNavigate();

    const [cliente, setCliente] = useState({});

    const goBack = () => {
        navigate(-1);
    }

    const formik = useFormik({
        initialValues: {
            search_cpf: '',
        },
        onSubmit: values => searchCpf(values),
    });

    const searchCpf = (values) => {
        setLoading(true)
        const data = {
            id: parceiro.id,
            cpf: values.search_cpf,
        }
        console.log(data)
        api.post('/search_cpf/', data).then((response) => {
            console.log(response.data);
            if (response.data.error) {
                setCliente({cpf: data.cpf});
                setNew_client(true);
            } else {
                setCliente(response.data);
                setNot_so_new_client(true);
                setNew_client(true);
            }
            setLoading(false);
        }).catch((error) => {
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
                    {new_client ? 
                        <NewClientForm 
                            parceiro={parceiro}
                            setLoading={setLoading}
                            new_client={!not_so_new_client}
                            cliente={cliente}
                        /> : 
                        <form onSubmit={formik.handleSubmit}>
                            <CustomInput
                                id='search_cpf'
                                type='text'
                                placeholder='CPF'
                                formik={formik}
                                required={true}
                            />
                            <CustomButton 
                                text='Pesquisar'
                            />
                        </form>}
                </section>
            </MainContainer>
        </section>
    )
}