import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cliente } from "./pages/Cliente";
import { Parceiro } from "./pages/Parceiro";
import { Cadastro } from "./pages/Cadastro";
import { Background } from "./components/Background";
import { Painel } from "./pages/Painel";


const App = () => {

  return (
    <section>
        <Background>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path='/recuperar_senha/' element={<ResetPassword />} />
                    <Route path='/cliente/' element={<Cliente />} />
                    <Route path='/parceiro/' element={<Parceiro />} />
                    <Route path='/cadastrar/' element={<Cadastro />} />
                    <Route path='/painel/' element={<Painel />} />
                </Routes>
            </BrowserRouter>
        </Background>
    </section>
        

  );
}

export default App;
