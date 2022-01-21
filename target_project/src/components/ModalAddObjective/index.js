import "./styles.css";
import iconClosed from "../../assets/icon_closed.svg";
import useRequests from "../../helpers/useRequest";
import { format } from 'date-fns';

function ModalAddObjective ({ setOpen, form, setForm, open,setIdd, setReload, reload}) {

    const { post } = useRequests();

    function handleChange(target) {
        setForm({...form, [target.name]: target.value})
      }
      
     async function handleSubmit(event) {
        event.preventDefault();
        if (!form.title || !form.description) {
            return (
              alert('Insira os campos: Título e Descrição')
            )
          }


          const body = {
            title: form.title, 
            description: form.description, 
            category: form.category, 
            createdAt: format(new Date(), 'MM/dd/yyyy'), 
            status: "active"
          };
        
        await post("targets", body);
        setOpen(false)
        setReload(!reload)
      }

      return (
        <div className="backdrop">
            <div className="modal">
                <img src={iconClosed} alt="icon closed" className="modal__icon-close" onClick={() => setOpen(false)} />

                <h1 className="modal__icon-title">Insira o objetivo</h1>

                <form className="modal__form flex-column" onSubmit={handleSubmit}>
                    <div className="modal__form-txt flex-column mt-2">
                        <label>Título</label>
                        <input 
                            className="mt-1"
                            name="title"
                            value={form.title}
                            type="text"
                            maxLength="35"
                            onChange={(event) => handleChange(event.target)}  
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
                            value={form.description}
                            onChange={(event) => handleChange(event.target)} 
                        />

                    </div>

                    <div className="modal__form-txt flex-column">
                        <label>Categoria</label>
                        <input 
                            className="mt-1"
                            name="category"
                            type='number'
                            value={form.category}
                            onChange={(event) => handleChange(event.target)} 
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