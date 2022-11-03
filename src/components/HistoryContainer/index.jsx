import { HistoryData } from '../HistoryData'
import colors from '../../_colors.scss'
import './style.scss'

export const HistoryContainer = ({historico, title, painel}) => {
    console.log(historico)
    const panel_style = {
        backgroundColor: colors.panel,
        borderBottomLeftRadius: 0,
        color: 'white',
    }

    return (
        <div className="history-background" style={painel ? panel_style : null}>
            <div className="history-title-container">
                <p className='history-title' style={painel ? {color: panel_style.color} : null}>
                    Histórico do {title}
                </p>
                <div className="logo-container">
                    <img className='logo' src="/logo.webp" alt="logo" />
                </div>
            </div>

            <div className="history-data-wrapper" >
                {historico.map(item => {
                    if (historico.indexOf(item) == 2) item.last = true;
                    return (
                        <HistoryData 
                            key={historico.indexOf(item)} 
                            historico={item}
                            painel={painel}
                        />
                    )
                })}
            </div>
        </div>
    )
}