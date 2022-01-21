import ModalAddObjective from "../../components/ModalAddObjective";
import { format } from 'date-fns';
import { useEffect, useState } from "react";
import CardObjective from "../../components/CardObjective";
import Header from "../../components/Header";
import useRequests from "../../helpers/useRequest";
import "./styles.css";

function Objectives() {
  const { get } = useRequests();
  
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: "", 
  description: "", 
  category: "", 
  createdAt: format(new Date(), 'MM/dd/yyyy'), 
  status: "active" })
  const [reload, setReload] = useState(false);
  const [resultsObjective, setResultsObjective] = useState()
  const [search, setSearch] = useState("")

  useEffect(() => {
  if(!search){
    loardObjectives()
  } else {
      const temp = resultsObjective.filter(
      (objective) =>
        objective.title.toLowerCase().includes(search.toLowerCase())
      );
      
      setResultsObjective(temp)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  useEffect(() => {
    loardObjectives()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload])

  
  async function loardObjectives() {
    const results = await get("targets");

    const filterActives = results.filter(e => e.status === "active" || e.status === "done" )

    setResultsObjective(filterActives)
  }

  return (
    <main className="objectives flex-column align-center">
      <Header 
      search={search} 
      setSearch={setSearch} />

      <section className="objectives__container flex-column mt-3">
        <button className="objectives__container-button mb-3 align-self-end" 
        onClick={() => setOpen(true)}>
          Novo objetivo
        </button>
        
        {
          resultsObjective &&
          resultsObjective.map(e => {
            return (
              <CardObjective 
              {...e} 
              key={e.id}
              setReload={setReload}
              reload={reload} 
              search={search}
              setSearch={setSearch}
              /> 
            )
          })
        }
        
        {
         open && <ModalAddObjective 
                  className="mt-2"
                  setOpen={setOpen}
                  setForm={setForm}
                  form={form}
                  open={open}
                  setReload={setReload}
                  reload={reload} />   
        }
      </section>
    </main>
  );
}

export default Objectives; 