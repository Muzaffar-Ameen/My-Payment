import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Form from "./pages/Form"
import Successful from "./pages/successfull"

// import Home from "./pages/Home";
// import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/footer";

function App() {
  return (
    <>
      {/* Global Header */}
      <Header title="Payment App" searchBar={false} />
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/successfull" element={<Successful />}></Route>
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
