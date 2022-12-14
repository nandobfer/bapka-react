import { useFormik } from 'formik'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import { CustomInput } from '../../components/CustomInput'
import { MainContainer } from '../../components/MainContainer'
import { api } from '../../api'
import { LoadingScreen } from '../../components/LoadingScreen'
import { HistoryContainer } from '../../components/HistoryContainer'
import { AreaTitle } from '../../components/AreaTitle'
import './style.scss'
import { useEffect } from 'react'
import { useCallback } from 'react'

export const Parceiro = () => {
    
    const [loading, setLoading] = useState(false);
    const loaded = false;
    
    const location = useLocation();
    const navigate = useNavigate();
    const [parceiro, setParceiro] = useState(location.state)
    // console.log(colors)
    // console.log(parceiro)
    console.log('location')
    console.log(location)

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
            } else {
                navigate('/painel/', {state: {cliente: response.data, parceiro: parceiro}})
            }
            setLoading(false);
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
        navigate('/cadastrar/', {state: parceiro});
    }

    useEffect(() => {
        api.post('/get_history', {id: parceiro.id, user_type: 'parceiro'}).then((response) => {
            setParceiro({
                ...parceiro,
                historico: response.data.historico,
            })
        })
    }, [loaded])

    return (
        <section>
            <LoadingScreen loading={loading} />
            <MainContainer>
            <div className="area-parceiro-container">
                    <div className="parceiro-info">
                        <AreaTitle 
                            user_type='parceiro'
                            button={{
                                text: 'Cadastar novo cliente',
                                action: toSignUp
                            }}
                        />

                        <div className="parceiro-info-container">
                            <h1>Ol??, {parceiro.loja.split(' ')[0]}!<span>IDP: {parceiro.id}</span></h1>
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
                                        <CustomButton text='Ok' border='0.3vw' />
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="history-container-wrapper">
                        <HistoryContainer historico={parceiro.historico} title='Parceiro' />
                    </div>
                </div>
            </MainContainer>
        </section>
    )
}