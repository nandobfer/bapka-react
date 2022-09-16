import './style.scss'
import { useLocation } from 'react-router-dom'
import { Background } from '../../components/Background';
import { MainContainer } from '../../components/MainContainer';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { useState } from 'react';

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

    return (
        <section>
            <Background>
                <MainContainer>
                    <div className="area-cliente-container">
                        <div className="cliente-info">
                            <div className="area-cliente-title">
                                <h2>Área do cliente</h2>
                                <div className="button">
                                    <CustomButton text='Inserir código promocional' />
                                </div>
                            </div>

                            <div className="cliente-info-container">
                                <h1>Olá, {cliente.nome.split(' ')[0]}!<span>IDC:{cliente.id}</span></h1>
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
                        <div className="history-container">

                        </div>
                    </div>
                </MainContainer>
            </Background>
        </section>
    )
}