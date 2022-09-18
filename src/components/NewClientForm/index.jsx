import { useFormik } from 'formik';
import { api } from '../../api';
import { CustomButton } from '../CustomButton/CustomButton';
import { CustomInput } from '../CustomInput';
import './style.scss'

export const NewClientForm = ({parceiro, cliente, new_client, setLoading}) => {
    let inputs = [];
    console.log(cliente)
    console.log(new_client)

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
            <CustomInput
                id='input_nome'
                type='text'
                placeholder='Nome'
                formik={formik}
                required={true}
                disabled={new_client ? false : true}
            />
            <CustomInput
                id='input_cpf'
                type='text'
                placeholder='CPF'
                formik={formik}
                required={true}
                disabled={new_client ? false : true}
            />
            <CustomInput
                id='input_telefone'
                type='text'
                placeholder='Telefone'
                formik={formik}
                required={true}
            />
            <CustomInput
                id='input_email'
                type='text'
                placeholder='E-mail'
                formik={formik}
                required={true}
            />
            <div>
                <CustomButton
                    text='Cadastrar cliente'
                />
            </div>
        </form>
    )
}