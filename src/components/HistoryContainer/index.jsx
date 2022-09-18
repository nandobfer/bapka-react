import { HistoryData } from '../HistoryData'
import './style.scss'

export const HistoryContainer = ({historico, title}) => {
    console.log(historico)

    return (
        <div className="history-background">
            <div className="history-title-container">
                <p className='history-title'>Histórico do {title}</p>
                <div className="logo-container">
                    <img className='logo' src="/logo.webp" alt="logo" />
                </div>
            </div>

            <div className="history-data-wrapper">
                {historico.map(item => {
                    return (
                        <HistoryData 
                            key={historico.indexOf(item)} 
                            historico={item} 
                        />
                    )
                })}
            </div>
        </div>
    )
}