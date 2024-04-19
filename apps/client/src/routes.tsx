import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Maintenance } from "./pages/maintenance";
import { NotFound } from "./pages/not-found";
import { Auth } from "./components/auth";
import { Profile } from "./pages/profile";

export const Router: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route errorElement={<NotFound />}>
            <Route index element={<Home />} />
            {/* Auth Routes */}
            <Route path="/maintenance" element={<Maintenance />} />
            <Route element={<Auth />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
