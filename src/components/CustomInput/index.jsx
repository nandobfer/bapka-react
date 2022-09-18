import './style.scss'

export const CustomInput = ({id, type, placeholder, formik, required, disabled}) => {

    return (
        <section className='custom-input-wrapper'>
            <input className='custom-input' 
                    id={id} 
                    name={id} 
                    type={type}
                    placeholder={placeholder} 
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                    required={required}
                    disabled={disabled}
                />
        </section>
    )
}