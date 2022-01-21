import iconLogo from "../../assets/icon_logo.svg";
import iconMenu from "../../assets/icon_menu.svg";
import "./styles.css";
import { useState } from "react";
import closed from "../../assets/icon_closed.svg";
import { NavLink } from "react-router-dom";
import iconTrash from "../../assets/iconTrash.svg";
import iconTrophy from "../../assets/iconTrophy.svg";

function Menu() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <>
            <div className="menu">
                <div className="menu__images">
                    <img src={iconLogo} alt="icon logo" />
                    <img src={`${openMenu ? closed : iconMenu}`} alt="icon menu" onClick={() => setOpenMenu(!openMenu)} />
                </div>

                {
                    openMenu &&
                    <nav className="menu__navegation mt-1">
                        <NavLink to="/objetivos" className=" flex-row gap-1">
                            <img src={iconTrophy} alt="icone troféu" />
                            Objetivos
                        </NavLink>
                        <NavLink to="/deletados" className=" flex-row gap-1">
                            <img src={iconTrash} alt="icone lixeira" />
                            Excluídos
                        </NavLink>
                    </nav>
                }
            </div>

        </>

    )
}

export default Menu;