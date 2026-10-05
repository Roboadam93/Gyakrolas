{/*
Készítsen egy TermekLista komponenst, 
amelybe írja ki, hogy "Forgalmazott termékek",
majd generálja le a felsorolását a tömbben található termékeknek egy Termek 
komponens paraméterezett használatával! 
A Termek komponensbe ágyazza bele a termék leírását!    
*/}

function TermekLista({ termekek }) {
  return (
    <>
      <h2>Forgalmazott termékek</h2>
      {termekek.map((termek) => (
        <Termek key={termek.id} {...termek} />
      ))}
    </>
  )
}

export default TermekLista
