import './App.css';
import { litSetup } from 'lit-client-setup';

function App() {
  return (
    <div className="App">
      <h1>Lit with Vite-React</h1>
      <p>Check console</p>
      <button onClick={litSetup}>Instantiate Lit</button>
    </div>
  );
}

export default App;