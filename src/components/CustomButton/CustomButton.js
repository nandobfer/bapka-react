import './CustomButton.css'

export const CustomButton = ({text, action}) => {
    return (
        <div className="button" onClick={action}>
            <p>{text}</p>
        </div>
    )
}