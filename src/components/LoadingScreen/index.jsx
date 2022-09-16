import './style.scss'
import ReactLoading from 'react-loading'

const Loading = () => {
    return (
        <div className="loading-screen">
            <ReactLoading
                className='loading-animation'
                type='spinningBubbles'
                color='#eee643'
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