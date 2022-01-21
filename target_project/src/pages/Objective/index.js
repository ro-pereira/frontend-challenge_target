import { useState } from "react";
import CardObjective from "../../components/CardObjective";
import Header from "../../components/Header";
import ModalAddObjective from "../../components/ModalAddObjective";
import "./styles.css";

function Objectives() {
    const [open, setOpen] = useState(false);

    return (
        <main className="objectives flex-column align-center">
          <Header />
    
          <section className="objectives__container flex-column mt-3">
            <button className="objectives__container-button mb-3 align-self-end"
            onClick={() => setOpen(true)}>
              Novo objetivo
            </button>
            
            <CardObjective />

            {
            open && <ModalAddObjective 
                    className="mt-2"
                    setOpen={setOpen} />   
            }
          
          </section>
        </main>
      );
}

export default Objectives; 