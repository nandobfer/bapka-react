import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

  return (
    <section>
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path='/recuperar_senha/' element={<ResetPassword />} />
            </Routes>
        </BrowserRouter>
    </section>
        

  );
}

export default App;
