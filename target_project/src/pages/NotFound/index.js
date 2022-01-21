import "./styles.css";
import { NavLink } from "react-router-dom";
import "../../styles/layout.css";
import "../../styles/spacing.css";
import logo from "../../assets/logo.svg"

function NotFound () {
    return (
        <div className="notFound__backdrop">
             <div className="notFound flex-column align-center">
                <img className="notFound__logo" src={logo} alt="logo" />

                <strong>
                    A página não pode ser encontrada
                </strong>

                <div className="notFound__links flex-row">
                    <NavLink to="/objetivos">
                    voltar aos objetivos
                    </NavLink>
                    <NavLink to="/deletados">
                    voltar aos objetivos excluídos
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default NotFound;