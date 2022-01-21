import { NavLink } from "react-router-dom";
import iconTrash from "../../assets/iconTrash.svg";
import iconTrophy from "../../assets/iconTrophy.svg";
import logo from "../../assets/logo.svg";
import "../../styles/layout.css";
import "../../styles/spacing.css";
import "./styles.css";

function Sidebar () {
    return (
        <aside className="navBar flex-column">
        <div className="navBar__logo flex-row justify-center align-center">
           <img src={logo} alt="logo" />
         </div>

         <nav className="flex-column">
             <NavLink to="/objetivos" className=" flex-row gap-1">
                 <img src={iconTrophy} alt="icone troféu" />
                     Objetivos
             </NavLink>
             <NavLink to="/deletados" className=" flex-row gap-1">
                 <img src={iconTrash} alt="icone lixeira" />
                     Excluídos
             </NavLink>
         </nav>
     </aside>
    )
}

export default Sidebar;