import {
    BrowserRouter, Route, Routes, Navigate
} from "react-router-dom";
import Siderbar from "./components/Sidebar";
import Deleted from "./pages/Deleted";
import NotFound from "./pages/NotFound";
import Objective from "./pages/Objective";
import "./styles/layout.css";
import Menu from "./components/Menu";

function Rotas() {
    return (
        <div className="routes">
            <BrowserRouter>
              <Siderbar />
              <Menu />
                <Routes>
                    <Route path="objetivos" exact strict element={<Objective  />} />
                    <Route path="deletados" exact strict element={<Deleted />} />
                    <Route
                    path="/"
                    element={<Navigate to="/objetivos" />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Rotas;