import { format } from 'date-fns';
import { useEffect, useState } from "react";
import IconCheck from "../../assets/icon_check.svg";
import IconClose from "../../assets/icon_close.svg";
import useRequests from "../../helpers/useRequest";
import "../../styles/layout.css";
import "./styles.css";

function CardObjective ({ iconRestore, 
    title, description, category, id, status, achievedAt, createdAt, deletedAt,
    setReload, reload, 
    setSearch, search }) {

    const { get, patch } = useRequests();
    const [filterCateg, setFilterCateg] = useState();

    useEffect(() => {
        if(category){
        loardCategory()
        }
        // eslint-disable-next-line
    }, [])
    
    async function loardCategory() {
        const results = await get(`categories/${category}`);
        setFilterCateg(results.name)        
    }
      
    async function handleStatus(id) {
        const body = {
            status: "done",
            achievedAt: format(new Date(), "dd/MM/yyyy")
        }  

        await patch(`targets/${id}`, body);
        setReload(!reload)
        search && setSearch("")
    }

    async function handleDelete(id){
        const body = {
            status: "deleted",
            deletedAt: format(new Date(), "dd/MM/yyyy")
        }

        await patch(`targets/${id}`, body);
        setReload(!reload)
        search && setSearch("")
    }

    async function handleRestore(id){
        const body = {
            status: "active",
            createdAt: format(new Date(), "dd/MM/yyyy")
        }

        await patch(`targets/${id}`, body);
        setReload(!reload)
        search && setSearch("")
    }

    return(
        <div className={`card__objective mb-2 flex-row justify-between 
        ${status === "done" && "card__objective-done"} ${iconRestore && "color"}`}>
            <div className="card__objective-text flex-column justify-between">
                <div>
                    <strong>
                        {title}
                    </strong>
                    <p>
                        {description}
                    </p>
                </div>

                <div className="card__objective-category flex-column align-center justify-center">
                    {filterCateg}
                </div>
            </div>

            {
                iconRestore ?
                <div className="card__objective-icons flex-column align-center"> 
                    <img src={iconRestore} alt="icon check"
                    className="mr-5"
                    onClick={() => handleRestore(id)} />

                    <span>removido em: {deletedAt}</span>
                </div> 
                
                :
            
                status ==="active" ? 
                <div className="card__objective-icons flex-column align-center gap-1">
                    <div className="card__objective-imgs flex-row ">
                        <img 
                        src={IconCheck} 
                        alt="icon check" 
                        onClick={() => handleStatus(id)} />
                        <img 
                        src={IconClose} 
                        alt="icon check" 
                        onClick={() => handleDelete(id)}/>
                    </div>
                    <span>
                        criado em: {createdAt}
                    </span>
                </div> 
                :
                <span className="card__objective-span flex-row align-self-end">
                    finalizado em: {achievedAt}
                </span>
            }
    </div>
    )
}

export default CardObjective;