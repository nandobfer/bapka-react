import './style.scss'

export const HistoryData = ({historico}) => {

    return (
        <section>
            <section className="history-data-container">
                <div className="pontinho"></div>
                <div>
                    <p className="user-type">{historico.alvo}: <span className="user-name">{historico.nome} - ID{historico.alvo[0].toUpperCase()}: <span className="user-id">{historico.id}</span></span></p>
                    <p>Data: <span>{historico.data}</span></p>
                    <p>Horário: <span>{historico.hora}</span></p>
                    <p>Quantidade: <span>{Math.abs(historico.quantidade)}</span><span className={`operacao-${historico.operacao.toLowerCase()}`}>{historico.operacao}{Math.abs(historico.quantidade) > 1 ? 's' : null}</span></p>
                </div>
            </section>
            <section className='history-line-container'>
                {historico.last ? null : <hr />}
            </section>
        </section>
    )
}

// historico = {
//     data: '16/09/2022', 
//     hora: '23:05', 
//     quantidade: 1, 
//     id: 0, 
//     nome: 'Fernando',
//     last: true

// }