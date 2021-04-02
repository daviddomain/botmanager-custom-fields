const createTemplate = (props) => {
  const template = document.createElement("template");

  template.innerHTML = `
    <style>

    </style>
    <div></div>
`;

  return template;
};

export default class BotManagerSelectInput extends HTMLElement {
  constructor() {
    super();
    const attributes = this.attributes;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      createTemplate(attributes).content.cloneNode(true)
    );
  }

  connectedCallback() {
    const attributes = this.attributes;
  }
}
