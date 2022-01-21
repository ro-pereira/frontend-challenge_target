import iconSearch from "../../assets/icon_search.svg";
import "../../styles/layout.css";
import "./styles.css";

function Header () {
    return(
        <header className="header flex-row align-center justify-between">
           <input 
           style={{backgroundImage: `url(${iconSearch})`}} 
           placeholder="Pesquisar" 
            />

           <h1 className="header__title">
               Olá, Bianca!
           </h1>
        </header>
    )
}

export default Header;