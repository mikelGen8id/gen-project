import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Register from "./pages/auth/Register";
import TermsPage from "./pages/auth/TermsPage";
import Loading from "./pages/auth/Loading";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start /> } />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/loading" element={<Loading/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
