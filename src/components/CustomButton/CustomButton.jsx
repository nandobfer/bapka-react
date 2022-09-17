import './CustomButton.scss'

export const CustomButton = ({text, action, border}) => {
    const style = {
        border: border
    }
    return (
        <button style={style} className="button-component" onClick={action} type="submit">{text}</button>
    )
}