import { useFormik } from 'formik'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import { CustomInput } from '../../components/CustomInput'
import { MainContainer } from '../../components/MainContainer'
import './style.scss'
import colors from '../../_colors.scss'
import { api } from '../../api'
import { LoadingScreen } from '../../components/LoadingScreen'
import { HistoryContainer } from '../../components/HistoryContainer'

export const Parceiro = () => {
    
    const [loading, setLoading] = useState(false);
    
    const location = useLocation();
    const navigate = useNavigate();
    const parceiro = location.state;
    // console.log(colors)
    // console.log(parceiro)


    const onExit = () => {
        window.location.href = '/'
    }

    const searchCpf = (values) => {
        setLoading(true)
        const data = {
            id: parceiro.id,
            cpf: values.cpf_value,
        }
        console.log(data)
        api.post('/search_cpf/', data).then((response) => {
            console.log(response.data);
            if (response.data.error) {
                alert(response.data.error);
                setLoading(false);
            } else {
                alert(`Sucesso: ir para página de cupons de ${response.data.nome} na loja ${parceiro.loja}`);
                setLoading(false);
            }
        }).catch((error) => {
            alert(error);
            setLoading(false);
        })
    }

    const formik = useFormik({
        initialValues: {
            cpf_value: ''
        },
        onSubmit: values => searchCpf(values),
    })

    const toSignUp = () => {
        navigate('/cadastrar/', {state: parceiro})
    }

    return (
        <section>
            <LoadingScreen loading={loading} />
            <MainContainer>
            <div className="area-parceiro-container">
                    <div className="parceiro-info">
                        <div className="area-parceiro-title">
                            <h2>Área do parceiro</h2>
                            <div className="button">
                                <CustomButton 
                                    text='Cadastrar novo cliente' 
                                    border={`0.2vw solid ${colors.background_color}`} 
                                    action={toSignUp}
                                />
                            </div>
                        </div>
                        <p className='exit-p' onClick={onExit}>Sair</p>

                        <div className="parceiro-info-container">
                            <h1>Olá, {parceiro.loja.split(' ')[0]}!<span>IDP: {parceiro.id}</span></h1>
                            <p>CNPJ: <span>{parceiro.cnpj}</span></p>
                            <p>E-mail: <span>{parceiro.email}</span></p>
                            <p>Telefone: <span>{parceiro.telefone}</span></p>
                        </div>

                        <div className="search-wrapper">
                            <div className="tabs">
                                <div className='search-tab'>Cupons</div>
                            </div>
                            <div className="search-container">
                                <p className='cpf-label'>Digite o CPF do cliente para adicionar ou remover cupons:</p>
                                <form onSubmit={formik.handleSubmit}>
                                    <CustomInput 
                                        id='cpf_value'
                                        name='cpf_value'
                                        type="text"
                                        placeholder='CPF'
                                        formik={formik}
                                        value={formik.values.cpf_value}
                                        required={true}
                                    />
                                    <div className='button-wrapper'>
                                        <CustomButton text='Ok' border={`0.3vw solid ${colors.background_color}`} />
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="history-container-wrapper">
                        <HistoryContainer historico={parceiro.historico} />
                    </div>
                </div>
            </MainContainer>
        </section>
    )
}