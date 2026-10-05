{/*A Termek komponensbe ágyazza bele a termék leírását!     */}

{/*5. Készítsen egy Termek komponenst, 
    amely paraméterként megkapja a termékek nevét,
    árát és raktármennyiségét egy objektumban! 
    Jelenítse meg a termék kapott adatait és leírását! 
    Ha a raktármennyiség poztitív szám, írja ki zölden, 
    hogy "Rendelhető", ha nulla, írja ki pirossal, hogy "Elfogyott"!
 */}
function Termek({termek}) {
  return (
    <>
        <TermekLista termekek={[termek]} />

        <div className={styles.termek}>
            <h3>{termek.név}</h3>
            <p>Ár: {termek.ár} Ft</p>
            //Ternary a ? szoval ha van akkor a színe zöld, ha nincs akkor a színe piros
            <p>Raktár: {termek.raktár > 0 ? <span style={{ color: 'green' }}>Rendelhető</span> : <span style={{ color: 'red' }}>Elfogyott</span>}</p>
            <p>Leírás: {termek.leírás}</p>
        </div>
    </>
  )
}

export default Termek