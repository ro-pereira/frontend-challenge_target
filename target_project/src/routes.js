import {
    BrowserRouter, Navigate, Route, Routes
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DeletedObjectives from "./pages/Deleted";
import NotFound from "./pages/NotFound";
import Objectives from "./pages/Objective";
import "./styles/layout.css";

function Rotas() {
    return (
        <div className="routes">
            <BrowserRouter>
            <Sidebar />
                <Routes>
                    <Route path="objetivos" exact strict element={<Objectives />} />
                    <Route path="deletados" exact strict element={<DeletedObjectives />} />
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