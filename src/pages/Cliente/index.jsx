import { useLocation } from 'react-router-dom'
import { MainContainer } from '../../components/MainContainer';
import { useEffect, useState } from 'react';
import { HistoryContainer } from '../../components/HistoryContainer';
import { AreaTitle } from '../../components/AreaTitle';
import { api } from '../../api'
import './style.scss'


export const Cliente = () => {
    const loaded = true;
    const location = useLocation();
    const cliente = location.state;

    const [active_tab1, setActive_tab1] = useState(true)
    const [active_tab2, setActive_tab2] = useState(false)

    const [loja, setLoja] = useState({});
    // const [cupons, setCupons] = useState(0);

    const tabs = {
        first: active_tab1,
        setFirst: setActive_tab1,
        second: active_tab2,
        setSecond: setActive_tab2,
    }

    const onClickTab1 = (event) => {
        tabs.setFirst(true);
        tabs.setSecond(false);
    }

    const onClickTab2 = (event) => {
        tabs.setSecond(true);
        tabs.setFirst(false);
    }

    // MOCADO ------
    cliente.cupons = 0;

    // will run only once when the component is loaded
    useEffect(() => {
        // getLojas();
        console.log(cliente)
        setLoja(cliente.lojas[0]);
        console.log(loja);
    }, [loaded]);
    

    return (
        <section>
            <MainContainer>
                <div className="area-cliente-container">
                    <div className="cliente-info-container">
                        <AreaTitle 
                            user_type='cliente'
                            button={{
                                text: 'Lojas',
                                action: alert,
                                width: '8vw',
                            }}
                        />

                        <div className="cliente-info-container">
                            <h1>Olá, {cliente.nome.split(' ')[0]}!<span>IDC: {cliente.id}</span></h1>
                            <h3>Você possui <span>{loja.cupons}</span> cupons na loja {loja.loja}!</h3> 
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
                        <HistoryContainer historico={cliente.historico} title='Cliente' />
                    </div>
                </div>
            </MainContainer>
        </section>
    )
}