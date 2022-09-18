import colors from '../../_colors.scss'
import './style.scss'

export const HistoryData = ({historico, painel}) => {

    const panel_style = {
        p_color: 'white',
        span_color: colors.background_color,
    }

    const p_style = painel ? {color: panel_style.p_color} : null;
    const span_style = painel ? {color: panel_style.span_color} : null;

    return (
        <section>
            <section className="history-data-container">
                <div className="pontinho" style={painel ? {backgroundColor: 'white'} : null}></div>
                <div>
                    <p className="user-type" style={p_style}>{historico.alvo}: <span style={span_style} className="user-name">{historico.nome} - ID{historico.alvo[0].toUpperCase()}: <span style={span_style} className="user-id">{historico.id}</span></span></p>
                    <p style={p_style}>Data: <span style={span_style}>{historico.data}</span></p>
                    <p style={p_style}>Horário: <span style={span_style}>{historico.hora}</span></p>
                    <p style={p_style}>Quantidade: <span style={span_style}>{Math.abs(historico.quantidade)}</span><span className={`operacao-${historico.operacao.toLowerCase()}`}>{historico.operacao}{Math.abs(historico.quantidade) > 1 ? 's' : null}</span></p>
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