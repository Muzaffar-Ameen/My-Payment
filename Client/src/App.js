import { HashRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Form from "./pages/Form";
import Successful from "./pages/successfull";
import Header from "./Components/Header";
import Footer from "./Components/footer";
import "./App.css";

function App() {
  return (
    <>
      <Header title="Payment App" searchBar={false} />
      <div className="main-content">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/form" element={<Form />} />
            <Route path="/successfull" element={<Successful />} />
            <Route path="*" element={<Signup />} />  {/* fallback */}
          </Routes>
        </HashRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
