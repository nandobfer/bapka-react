import './CustomButton.scss'

export const CustomButton = ({text, action}) => {
    return (
        <button className="button-component" onClick={action} type="submit">{text}</button>
    )
}