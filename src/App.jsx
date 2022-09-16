import Login from "./pages/Login";
import axios from 'axios';
import config from './config.json'
import { useState } from 'react';


const App = () => {
    const [errorCliente, setErrorCliente] = useState('');
    const [errorParceiro, setErrorParceiro] = useState('');
    
    const tryLogin = (values) => {
        // alert(JSON.stringify(values, null, 2))
    
        // zera o texto de erro renderizado
        if (values.user_cliente) {
            setErrorCliente('');
            values.type = 'cliente';
            
        } else {
            setErrorParceiro('');
            values.type = 'parceiro';
    
        }
        console.log(values);
    
        // post request na api
        axios.post(`${config.api}/login/`, values).then((response) => {
            console.log(response.data)
    
            // renderiza mensagem de erro de login
            if (response.data.error) {
                if (values.user_cliente) {
                    setErrorCliente(response.data.error);
                } else {
                    setErrorParceiro(response.data.error);
                }
            } else {
                // ir pra próxima página
                alert('login success: proxima pagina')
            };
    
        }).catch((error) => {
            console.log(`Erro: ${error}`);
        });
    }
  return (
    <Login tryLogin={tryLogin} error_texts={{cliente: errorCliente, parceiro: errorParceiro}} />

  );
}

export default App;
