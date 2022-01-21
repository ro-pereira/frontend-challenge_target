import "./styles.css";
import iconClosed from "../../assets/icon_closed.svg";

function ModalAddObjective ({ setOpen }) {
    return (
        <div className="backdrop">
            <div className="modal">
                <img src={iconClosed} alt="icon closed" className="modal__icon-close" onClick={() => setOpen(false)} />

                <h1 className="modal__icon-title">Insira o objetivo</h1>

                <form className="modal__form flex-column">
                    <div className="modal__form-txt flex-column mt-2">
                        <label>Título</label>
                        <input 
                            className="mt-1"
                            name="title"
                            type="text"
                            maxLength="35"
                        />
                    </div>

                    <div className="modal__form-txt flex-column">
                        <label>Descrição</label>
                        <textarea 
                            className="mt-1"
                            cols="33"
                            rows="4"
                            maxLength="200"
                            name="description"
                            type='text'
                        />

                    </div>

                    <div className="modal__form-txt flex-column">
                        <label>Categoria</label>
                        <input 
                            className="mt-1"
                            name="category"
                            type='number' 
                        />
                    </div>

                    <div className="modal__form-buttons flex-row gap-1 mt-2">
                        <button>Confirmar</button>
                        <button onClick={() => setOpen(false)}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalAddObjective;