import createTemplate from "./template.js";

export default class BotManagerFieldset extends HTMLElement {
  constructor() {
    super();
    const attributes = this.attributes;
    const templateAndProps = createTemplate(attributes);
    this.collapsible = templateAndProps.collapsible;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      templateAndProps.template.content.cloneNode(true)
    );

    this.fieldset = this.shadowRoot.querySelector("fieldset");
    document.addEventListener("DOMContentLoaded", this._domContentLoaded);
    if (this.collapsible) {
      this._getDismiss().addEventListener("click", this._toggleFieldset);
    }
  }

  _getDismiss() {
    return this.shadowRoot.querySelector(".dismiss");
  }

  _toggleFieldset = (evt) => {
    this.fieldset.classList.toggle("hide");
  };

  _domContentLoaded = (evt) => {
    this.fieldset.style.maxHeight =
      this.fieldset.getBoundingClientRect().height + "px";
  };

  connectedCallback() {}

  disconnectedCallback() {
    document.removeEventListener("DOMContentLoaded", this._domContentLoaded);
    if (this.collapsible) {
      this._getDismiss().removeEventListener("click", this._toggleFieldset);
    }
  }
}
