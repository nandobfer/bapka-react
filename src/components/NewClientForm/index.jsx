import { useFormik } from 'formik';
import { api } from '../../api';
import { CustomButton } from '../CustomButton/CustomButton';
import { CustomInput } from '../CustomInput';
import './style.scss'

export const NewClientForm = ({parceiro, cliente, setLoading}) => {
    let inputs = [];
    console.log(cliente)

    const formik = useFormik({
        initialValues: {
            input_nome: cliente.nome,
            input_telefone: cliente.telefone,
            input_email: cliente.email,
            input_cpf: cliente.cpf,
            input_senha: '',
            input_confirmacao: '',
        },
        onSubmit: values => sendSignUpForm(values),
    });

    const buildInputs = () => {
        for (let key in formik.values) {
            let input = key;
            inputs.push(input);
        }
        console.log(inputs);
    }
    buildInputs();

    const sendSignUpForm = (values) => {
        setLoading(true);
        const data = {
            id_parceiro: parceiro.id,
            cliente: values
        };
        console.log(data);

        api.post('/new_client/', data).then((response) => {
            console.log(response.data);
            if (response.data.error) {
                alert(response.data.error);
            } else {
                alert(`Sucesso: ${response.data}`);
            }
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            alert(error);
            setLoading(false);
        })
    }

    return (
        <form className='new-client-form' onSubmit={formik.handleSubmit}>
            {inputs.map(item => {
                return (
                    <CustomInput
                        id={item}
                        type='text'
                        placeholder={`${item.split('_')[1][0].toUpperCase()}${item.split('_')[1].slice(1)}`}
                        formik={formik}
                        key={inputs.indexOf(item)}
                        required={true}
                    />
                )
            })}
            <div>
                <CustomButton
                    text='Cadastrar cliente'
                />
            </div>
        </form>
    )
}