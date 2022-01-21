import { useEffect, useState } from "react";
import iconRestore from "../../assets/icon_restore.svg";
import CardObjective from "../../components/CardObjective";
import Header from "../../components/Header";
import useRequests from "../../helpers/useRequest";
import "../../styles/layout.css";
import "./styles.css";

function DeletedObjectives() {
    const { get } = useRequests();
    const [resultOfDeletedObjectives, setResultOfDeletedObjectives] = useState()
    const [search, setSearch] = useState("");
    const [reload, setReload] = useState(false);

    useEffect(() => {
        handleLoardObjectives()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reload])

    useEffect(() => {
        if (!search) {
            handleLoardObjectives()
        } else {
            const temp = resultOfDeletedObjectives.filter(
                (objct) =>
                    objct.title.toLowerCase().includes(search.toLowerCase())
            );

            setResultOfDeletedObjectives(temp)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    async function handleLoardObjectives() {
        const results = await get("targets");

        const filtedDeleted = results.filter(e => e.status === "deleted")

        setResultOfDeletedObjectives(filtedDeleted)
    }

    return (
        <main className="deleted flex-column align-center">
            <Header
                search={search}
                setSearch={setSearch} />
            <section className="deleted__container flex-column align-center justify-center mt-10">
                {
                    resultOfDeletedObjectives &&
                    resultOfDeletedObjectives.map(objct => {
                        return (
                            <CardObjective
                                key={objct.id}
                                {...objct}
                                iconRestore={iconRestore}
                                setReload={setReload}
                                reload={reload}
                                setSearch={setSearch}
                                search={search} />
                        )
                    })
                }
            </section>
        </main>
    );
}

export default DeletedObjectives;