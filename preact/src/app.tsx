import './app.css';
import { litSetup, LitNodeClientVersion } from 'lit-client-setup';

export function App() {
  return (
    <div className="App">
      <h1>Lit with Preact</h1>
      <p>LitNodeClientVersion: {LitNodeClientVersion}</p>
      <p>Check console</p>
      <button onClick={litSetup}>Instantiate Lit</button>
    </div>
  );
}