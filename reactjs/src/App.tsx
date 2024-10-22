import './App.css';
import { litSetup, LitNodeClientVersion } from 'lit-client-setup';

function App() {
  return (
    <div className="App">
      <h1>Lit with React</h1>
      <p>LitNodeClientVersion: {LitNodeClientVersion}</p>
      <p>Check console</p>
      <button onClick={litSetup}>Instantiate Lit</button>
    </div>
  );
}

export default App;
