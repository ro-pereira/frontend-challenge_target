import "./styles.css";
import Header from "../../components/Header";
import CardObjective from "../../components/CardObjective";
import iconRestore from "../../assets/icon_restore.svg";

function DeletedObjectives() {
    return (
        <main className="deleted flex-column align-center">
            <Header />
            <section className="deleted__container flex-column align-center justify-center mt-10">

                <CardObjective 
                iconRestore={iconRestore}/>
            </section>
        </main>
    );
}

export default DeletedObjectives;