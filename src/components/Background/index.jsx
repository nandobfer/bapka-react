import './style.scss'

export const Background = ({children}) => {
    return (
        <div className="background">
            {children}
            <img className='top-floating-img floating-img' src="/background_top.png" alt="Leite" />
            <img className='bottom-floating-img floating-img' src="/background_top.png" alt="Leite" />
            <img id='circle-1' className='floating-img floating-circle' src="/circulo_1.svg" alt="Leite" />
            <img id='circle-2' className='floating-img floating-circle' src="/circulo_1.svg" alt="Leite" />
            <img id='circle-3' className='floating-img floating-circle' src="/circulo_1.svg" alt="Leite" />
            <img id='circle-4' className='floating-img floating-circle' src="/circulo_1.svg" alt="Leite" />
            <img id='circle-5' className='floating-img floating-circle' src="/circulo_1.svg" alt="Leite" />
        </div>
    )
}