import './app.css';
import { litSetup } from 'lit-client-setup';

export function App() {
  return (
    <div className="App">
      <h1>Lit with Preact</h1>
      <p>Check console</p>
      <button onClick={litSetup}>Instantiate Lit</button>
    </div>
  );
}