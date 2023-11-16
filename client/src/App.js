// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Email from "./Components/Email";
import Emailotp from "./Components/Emailotp";
import Otp from "./Components/Otp";
import Signup from "./Components/Signup";
import IdVerification from "./Components/IdVerification";
import PasswordSetup from "./Components/PasswordSetup";
import Verify from "./Components/Verify";
import Income from "./Components/Income";
import LoanDetails from "./Components/LoanDetails";
import Agreement from "./Components/Agreement";
import ServiceFee from "./Components/ServiceFee";
import Completion from "./Components/Completion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/email" element={<Email />} />
        <Route path="/emailotp" element={<Emailotp />} />
        <Route path="/idverify" element={<IdVerification />} />
        <Route path="/forgotpass" element={<PasswordSetup />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/income" element={<Income />} />
        <Route path="/loan" element={<LoanDetails />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/service" element={<ServiceFee />} />
        <Route path="/complete" element={<Completion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
