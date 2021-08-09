import createTemplate from "./template.js";

export default class BotManagerGeneric extends HTMLElement {
  constructor() {
    super();
    const attributes = this.attributes;
    const templateAndProps = createTemplate(attributes);
    this.span = templateAndProps.span;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      templateAndProps.template.content.cloneNode(true)
    );
  }

  connectedCallback() {
    this.style.gridColumn = this.span;
  }
}
