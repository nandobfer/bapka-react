import colors from '../../_colors.scss'
import './CustomButton.scss'

export const CustomButton = ({text, action, border, font_size, width, height, deactivated}) => {
    const style = {
        border: border ? `${border} solid ${colors.background_color}` : null,
        fontSize: font_size ? font_size : null,
        width: width ? width : null,
        height: height ? height : null,
        opacity: deactivated ? '0.3' : null,
        pointerEvents: deactivated ? 'none' : null,
    }
    console.log(style)
    return (
        <button style={style} className="button-component" onClick={action} type="submit">{text}</button>
    )
}