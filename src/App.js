import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coin-page/:id" element={<CoinPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
