import './style.scss'

export const CustomInput = (props) => {

    return (
        <section className='custom-input-wrapper'>
            <input className='custom-input' 
                    id={props.id} 
                    name={props.name} 
                    type={props.type}
                    placeholder={props.placeholder} 
                    onChange={props.formik.handleChange}
                    value={props.formik.values.user_value}
                    required={props.required}
                />
        </section>
    )
}