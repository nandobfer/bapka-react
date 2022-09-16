import { Background } from '../Background'
import './style.scss'

export const MainContainer = ({children}) => {
    return (
        <section>
            <Background>
                <div className="main-container">
                    {children}
                </div>
            </Background>
        </section>
    )
}