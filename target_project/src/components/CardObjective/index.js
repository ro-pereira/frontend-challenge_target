import IconCheck from "../../assets/icon_check.svg";
import IconClose from "../../assets/icon_close.svg";
import "./styles.css";

function CardObjective({ iconRestore }) {
    return (
        <div className={`card__objective mb-2 flex-row justify-between`}>
            <div className="card__objective-text flex-column justify-between">
                <div>
                    <strong>
                        test
                    </strong>
                    <p>
                        test
                    </p>
                </div>

                <div className="card__objective-category flex-column align-center justify-center">
                    test
                </div>
            </div>


            {
                iconRestore ?
                    <div className="card__objective-icons flex-column">
                        <img src={iconRestore} alt="icon check"
                        />

                        <span>removido em: </span>
                    </div>

                    :

                    <div className="card__objective-icons flex-column align-center gap-1">
                        <div className="card__objective-imgs flex-row ">
                            <img
                                src={IconCheck}
                                alt="icon check" />
                            <img
                                src={IconClose}
                                alt="icon check" />
                        </div>
                        <span>
                            criado em:
                        </span>
                    </div>

            }


        </div>
    )
}

export default CardObjective;