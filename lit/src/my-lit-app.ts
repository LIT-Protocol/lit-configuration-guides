import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { LitNodeClient } from '@lit-protocol/lit-node-client';
import { LitNetwork } from '@lit-protocol/constants';

@customElement('my-lit-app')
class MyLitApp extends LitElement {
  static styles = css`
    .app {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 2rem;
    }
  `;

  async instantiateLit() {
    console.log('connecting to lit...');
    const litNodeClient = new LitNodeClient({
      litNetwork: LitNetwork.DatilDev,
      debug: false,
    });

    await litNodeClient.connect();
    console.log('connected!');
  }

  render() {
    return html`
      <div class="app">
        <h1>Using with Lit framework</h1>
        <p>Check console</p>
        <button @click="${this.instantiateLit}">Instantiate Lit</button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-lit-app': MyLitApp;
  }
}