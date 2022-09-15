import './CustomButton.css'

export const CustomButton = ({text, action}) => {
    return (
        <button className="button" onClick={action} type="submit">{text}</button>
    )
}