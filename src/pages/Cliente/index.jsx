import './style.scss'
import { useLocation } from 'react-router-dom'
import { MainContainer } from '../../components/MainContainer';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { useState } from 'react';
import colors from '../../_colors.scss'
import { HistoryContainer } from '../../components/HistoryContainer';


export const Cliente = () => {
    const location = useLocation();
    const cliente = location.state;
    console.log(cliente)

    const [active_tab1, setActive_tab1] = useState(true)
    const [active_tab2, setActive_tab2] = useState(false)

    const tabs = {
        first: active_tab1,
        setFirst: setActive_tab1,
        second: active_tab2,
        setSecond: setActive_tab2,
    }

    const onClickTab1 = (event) => {
        tabs.setFirst(true)
        tabs.setSecond(false)
    }

    const onClickTab2 = (event) => {
        tabs.setSecond(true)
        tabs.setFirst(false)
    }

    const onExit = () => {
        window.location.href = '/'
    }

    return (
        <section>
            <MainContainer>
                <div className="area-cliente-container">
                    <div className="cliente-info-container">
                        <div className="area-cliente-title">
                            <h2>Área do cliente</h2>
                            <div className="button">
                                <CustomButton text='Inserir código promocional' border={`0.2vw solid ${colors.background_color}`} />
                            </div>
                        </div>
                        <p onClick={onExit}>Sair</p>

                        <div className="cliente-info-container">
                            <h1>Olá, {cliente.nome.split(' ')[0]}!<span>IDC: {cliente.id}</span></h1>
                            <h3>Você possui <span>{cliente.cupons}</span> cupons!</h3>
                        </div>

                        <div className="how-to-wrapper">
                            <div className="tabs">
                                <div onClick={onClickTab1} className={tabs.first ? 'active' : null}>Como posso usar?</div>
                                <div onClick={onClickTab2} className={tabs.second ? 'active' : null}>Como ganho mais?</div>
                            </div>
                            <div className="info">

                            </div>
                        </div>

                    </div>
                    <div className="history-container-wrapper">
                        <HistoryContainer historico={cliente.historico} />
                    </div>
                </div>
            </MainContainer>
        </section>
    )
}