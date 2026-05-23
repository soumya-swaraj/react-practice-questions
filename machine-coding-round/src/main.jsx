import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { navbarItems } from "./components/Navbar/Navbar.constants.js";
import OTPInput from "./features/otp-input/OTPInput.jsx";
import CountdownTimer from "./features/countdown-timer/CountdownTimer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={navbarItems.otp.path} element={<OTPInput />} />
        <Route
          path={navbarItems.countDownTimer.path}
          element={<CountdownTimer />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
