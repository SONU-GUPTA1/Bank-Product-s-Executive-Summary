import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Customer from "./Pages/Customer";
import Tranctions from "./Pages/Tranctions";
import Users from "./Pages/Users";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <h1 className="bank-view">Bank - Unified View</h1>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/tranctions" element={<Tranctions />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
