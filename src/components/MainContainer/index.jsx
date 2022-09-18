import { Background } from '../Background'
import './style.scss'

export const MainContainer = ({children}) => {
    return (
        <section>
                <div className="main-container">
                    {children}
                </div>
        </section>
    )
}