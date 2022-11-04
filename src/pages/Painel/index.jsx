import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { AreaTitle } from '../../components/AreaTitle';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { HistoryContainer } from '../../components/HistoryContainer';
import { MainContainer } from '../../components/MainContainer';
import { api } from '../../api'
import colors from '../../_colors.scss';
import './style.scss'
import { LoadingScreen } from '../../components/LoadingScreen';

export const Painel = () => {
    const location_state = useLocation().state;
    const [cliente, setCliente] = useState(location_state.cliente);
    const [loading, setLoading] = useState(false);
    const parceiro = location_state.parceiro;
    // const setParceiro = () => location_state.setParceiro;
    console.log(cliente, parceiro);
    const navigate = useNavigate();

    const [cupons, setCupons] = useState(0);

    const increaseButton = () => {
        setCupons(cupons+1);
    }
    
    const decreaseButton = () => {
        setCupons(cupons-1);
    }

    const cupons_style = {
        color: cupons === 0 ? 'white' : cupons > 0 ? colors.text_adicionado : colors.text_removido
    }

    const goBack = () => {
        navigate(-1)
    }

    const changeCupons = () => {
        setLoading(true)
        const data = {
            id_cliente: cliente.id,
            id_parceiro: parceiro.id,
            cpf: cliente.cpf,
            nome_cliente: cliente.nome,
            nome_parceiro: parceiro.loja,
            quantidade: cupons,
            total: cliente.cupons + cupons,
        }
        console.log('modificar cupons');
        console.log(data);
        api.post('/modificar_cupons/', data).then((response) => {
            console.log('resposta')
            console.log(response.data);
            if (response.data.error) {
                alert(response.data.error);
            } else {
                setCliente({
                    ...cliente,
                    historico: response.data.historico,
                    cupons: response.data.cupons,
                });
                // setParceiro(response.data.parceiro);
                setCupons(0);
            }
            setLoading(false);
        })
    }

    return (
        <section>
            <LoadingScreen loading={loading} />
            <MainContainer>
                <section className="client-panel-wrapper">
                    <div className="client-panel-container">
                        <AreaTitle user_type='parceiro' />
                        <div className="client-panel-data">
                            <div className="cliente-voltar">
                                <p>Cliente</p>
                                <div>
                                    <CustomButton
                                        text='Voltar'
                                        action={goBack}
                                        border='0.25vw'
                                    />
                                </div>
                            </div>
                            <h1>{cliente.nome.split(' ')[0]}</h1>
                            <p>CPF: {cliente.cpf}</p>
                            <p>Telefone: {cliente.telefone}</p>
                            <p>Cupons: <span>{cliente.cupons}</span></p>
                            <p>Insira a quantidade de cupons que deseja adicionar ou remover</p>
                            <div className="cupons-wrapper">
                                <h1>Quantidade:</h1>
                                <div className="cupons-container">
                                    <div onClick={increaseButton} className="triangle triangle-up"></div>
                                    {cupons > 0 ? <h1 className="operador-mais operador">+</h1> : null}
                                    <h1 style={cupons_style}>{Math.abs(cupons)}</h1>
                                    {cupons < 0 ? <h1 className="operador-menos operador">-</h1> : null}
                                    <div onClick={decreaseButton} className="triangle triangle-down"></div>
                                </div>
                                <p>Cupons</p>
                                <div className="cupons-buttons-container">
                                    <CustomButton
                                        text='Aplicar'
                                        action={changeCupons}
                                        border='0.2vw'
                                        font_size='1.2vw'
                                        width='9vw'
                                        height='2.5vw'
                                        deactivated={cupons === 0 ? true : false}
                                        />
                                    <CustomButton
                                        text='Limpar'
                                        action={() => {setCupons(0)}}
                                        border='0.2vw'
                                        font_size='0.85vw'
                                        width='5vw'
                                        height='1.5vw'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="history-container-wrapper">
                        <HistoryContainer historico={cliente.historico} title='Cliente' painel={true} />
                    </div>
                </section>
            </MainContainer>
        </section>
    )
}