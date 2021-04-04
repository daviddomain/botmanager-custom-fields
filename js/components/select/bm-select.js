import createTemplate from "./template.js";

export default class BotManagerSelect extends HTMLElement {
  constructor() {
    super();
    const attributes = this.attributes;
    const templateAndProps = createTemplate(attributes);
    this.name = attributes.name.value;
    this.span = templateAndProps.span;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      templateAndProps.template.content.cloneNode(true)
    );

    this.select = this.shadowRoot.querySelector("select");
    this.select.addEventListener("change", this._onChangeSelect);
    if (this.value) {
      this.select.value = this.value;
    }
  }

  get value() {
    return this.getAttribute("value");
  }

  set value(value) {
    this.setAttribute("value", value);
    return this;
  }

  _onChangeSelect = (evt) => {
    this.value = this.select.options[this.select.selectedIndex].value;
  };

  connectedCallback() {}

  disconnectedCallback() {
    this.select.removeEventListener("change", this._onChangeSelect);
  }
}
