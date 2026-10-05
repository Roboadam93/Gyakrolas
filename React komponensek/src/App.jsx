import './App.css';
function App() {
  const termekek = [
    { id: 1, név: "bögre", ár: 500, raktár: 10 },
    { id: 2, név: "póló", ár: 3000, raktár: 5 },
    { id: 3, név: "sapka", ár: 2000, raktár: 8 },
    { id: 4, név: "esernyő", ár: 2500, raktár: 3 },
  ];

  return (
    <>
      <h1>Webáruház</h1>
      <h2>Horvát Ádám</h2>
      <div>
        {termekek.map(termek => (
          <div key={termek.id}>
            <p>{termek.név} - {termek.ár} Ft</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;