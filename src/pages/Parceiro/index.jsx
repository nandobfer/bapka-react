import { useLocation } from 'react-router-dom'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import { MainContainer } from '../../components/MainContainer'
import './style.scss'

export const Parceiro = () => {

    const location = useLocation()
    const parceiro = location.state;
    console.log(parceiro)

    const onExit = () => {
        window.location.href = '/'
    }

    return (
        <section>
            <MainContainer>
            <div className="area-parceiro-container">
                    <div className="parceiro-info">
                        <div className="area-parceiro-title">
                            <h2>Área do parceiro</h2>
                            <div className="button">
                                <CustomButton text='Cadastrar novo cliente' />
                            </div>
                        </div>
                        <p onClick={onExit}>Sair</p>

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