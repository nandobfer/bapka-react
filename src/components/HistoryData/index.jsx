import './style.scss'

export const HistoryData = ({historico, text}) => {

    return (
        <section className="history-data-container">
            <p className="user-type">{text}: <span className="user-name">{historico.nome} - IDC: <span className="user-id">{historico.id}</span></span></p>
        </section>
    )
}