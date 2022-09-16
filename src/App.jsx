import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cliente } from "./pages/Cliente";


const App = () => {

  return (
    <section>
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path='/recuperar_senha/' element={<ResetPassword />} />
                <Route path='/cliente/' element={<Cliente />} />
            </Routes>
        </BrowserRouter>
    </section>
        

  );
}

export default App;
