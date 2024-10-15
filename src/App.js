import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Jatekter from './components/Jatekter.js';
import LOModell from './modell/LOModell';

function App() {

  const lomodell = new LOModell();

  const [lista, setLista] = useState(lomodell.getList())

  function katt(adat) {
    lomodell.lampakapcsol(adat);
    setLista([...lomodell.getList()])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>LightOn</h3>
      </header>
      <article>
        <h3>LightOn Játék React-ban</h3>
        <div className="tartalom">
          <Jatekter szinLista={lista} katt={katt} />
        </div>
      </article>
      <footer>
        <p className="text-center">
          2024 - Szabó-Mester Alex
        </p>
      </footer>
    </div>
  );
}

export default App;
