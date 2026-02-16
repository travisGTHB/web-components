import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
      link: { type: String },
      buttonText: { type: String, attribute: 'buttonText' },
      backgroundColor: { type: String, attribute: 'background-color' },
      fancy: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "";
    this.description = "Default description";
    this.link = "#";
    this.buttonText = "Details";
    this.backgroundColor = "white";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 10px;
        vertical-align: top;
      }
      :host([fancy]) .card {
        border-color: gray;
        box-shadow: 0 0 10px black;
      }
      .card {
        border: 2px solid #ccc;
        padding: 16px;
        width: 300px;
        border-radius: 8px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        min-height: 450px;
      }
      .card-title {
        text-align: center;
        font-size: 1.5rem;
        margin: 0 0 12px 0;
      }
      .card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        display: block;
        border-radius: 4px;
      }
      .card-content {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
       details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }
      details[open] summary {
        font-weight: bold;
      }
      details div {
        border: 2px gray solid;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow-y: auto;
        overflow-x: hidden;
        overflow-wrap: break-word;
      }
      .card-description {
        text-align: left;
        margin-bottom: 16px;
      }
      .card-button {
        margin: auto auto 0 auto; 
        display: block;
        width: fit-content;
        padding: 8px 16px;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 4px;
      }
      .card-button:hover { 
        background-color: #0056b3;
      }
    `;
  }

  openChanged(e) {
  console.log(e);
  if (e.target.getAttribute('open') !== null) {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
}

 render() {
    return html`
      <section class="card" style="background-color: ${this.backgroundColor}">
        <h2 class="card-title">${this.title}</h2>
        <img class="card-image" src="${this.image}" alt="${this.title}">
        <div class="card-content">
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div>
              ${this.description}
              <slot></slot>
            </div>
          </details>
          <a href="${this.link}" class="card-button">${this.buttonText}</a>
        </div>
      </section>
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);