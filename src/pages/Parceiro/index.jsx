import { useFormik } from 'formik'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import { CustomInput } from '../../components/CustomInput'
import { MainContainer } from '../../components/MainContainer'
import './style.scss'
import colors from '../../_colors.scss'

export const Parceiro = () => {
    console.log(colors)

    const [cpf_value, setCpf_value] = useState('')

    const location = useLocation()
    const parceiro = location.state;
    console.log(parceiro)

    const onExit = () => {
        window.location.href = '/'
    }

    const searchCliente = (values) => {
        console.log(values)
    }

    const formik = useFormik({
        initialValues: {
            cpf_value: ''
        },
        onSubmit: values => searchCliente(values)
    })

    return (
        <section>
            <MainContainer>
            <div className="area-parceiro-container">
                    <div className="parceiro-info">
                        <div className="area-parceiro-title">
                            <h2>Área do parceiro</h2>
                            <div className="button">
                                <CustomButton text='Cadastrar novo cliente' border={`0.2vw solid ${colors.background_color}`} />
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
                                <p>Digite o CPF do cliente para adicionar ou remover cupons:</p>
                                <div>
                                    <CustomInput 
                                        id={cpf_value}
                                        name={cpf_value}
                                        type="text"
                                        placeholder='CPF'
                                        formik={formik}
                                        onChange={formik.handleChange}
                                        value={formik.values.cpf_value}
                                        required={true}
                                    />
                                    <div>
                                        <CustomButton text='Ok' border={`0.3vw solid ${colors.background_color}`} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="history-container">

                    </div>
                </div>
            </MainContainer>
        </section>
    )
}