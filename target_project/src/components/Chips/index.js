import "./styles.css"

function Chips({ name, setIdCateg, id, classt }) {
    return (
        <span className={`modal__form-chips ${classt}`}
            onClick={() => setIdCateg(id)}>
            {name}
        </span>
    )
}

export default Chips;