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
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 10px;
        vertical-align: top;
      }
      .card {
        border: 2px solid #ccc;
        padding: 16px;
        width: 300px;
        border-radius: 8px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease;
        display: flex;
        flex-direction: column;
        min-height: 400px;
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
      .card-context {
        padding: 8px 0;
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: space-between;
      }
      .card-description {
        text-align: left;
        margin-bottom: 16px;
      }
      .card-button {
        display: block;
        margin: 0 auto;
        width: fit-content;
        padding: 8px 16px;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        transition: background-color 0.3s ease;
      }
      .card-button:hover { 
        background-color: #0056b3;
      }
    `;
  }

  render() {
    return html`
      <section class="card" style="background-color: ${this.backgroundColor}">
        <h2 class="card-title">${this.title}</h2>
        <img class="card-image" src="${this.image}" alt="${this.title}">
        <div class="card-context">
          <p class="card-description">${this.description}</p>
          <a href="${this.link}" class="card-button">${this.buttonText}</a>
        </div>
      </section>
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);