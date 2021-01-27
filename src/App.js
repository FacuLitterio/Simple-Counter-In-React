import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = `Has clickeado ${contador}`;
  });

  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <div className="Display">
        <h3>Cuenta: {contador}</h3>
        <button type="button" onClick={() => setContador(contador - 1)}>
          Restar
        </button>
        <button type="button" onClick={() => setContador(contador + 1)}>
          Sumar
        </button>
      </div>
    </div>
  );
}

export default App;
