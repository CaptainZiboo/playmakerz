import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";

export const Router: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
