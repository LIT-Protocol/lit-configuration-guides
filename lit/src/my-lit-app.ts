import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { litSetup } from 'lit-client-setup';
@customElement('my-lit-app')
class MyLitApp extends LitElement {
  static styles = css`
    .app {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 2rem;
    }
  `;



  render() {
    return html`
      <div class="app">
        <h1>Using with Lit framework</h1>
        <p>Check console</p>
        <button @click="${litSetup}">Instantiate Lit</button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-lit-app': MyLitApp;
  }
}