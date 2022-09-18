import './style.scss'
import ReactLoading from 'react-loading'
import colors from '../../_colors.scss'

const Loading = () => {
    return (
        <div className="loading-screen">
            <ReactLoading
                className='loading-animation'
                type='spinningBubbles'
                color={colors.background_color}
            />
        </div>
    )
}

export const LoadingScreen = ({loading}) => {
    return (
        <section>
            {loading ? <Loading /> : null}
        </section>
    )
}

/* 
blank
balls
bars
bubbles
cubes
cylon
spin
spinningBubbles
spokes
 */