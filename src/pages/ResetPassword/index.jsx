import {useLocation} from 'react-router-dom';

const ResetPassword = () => {

    const location = useLocation();
    console.log(location.state)

    return (
        <h1>Recuperar senha</h1>
    )
}

export default ResetPassword;