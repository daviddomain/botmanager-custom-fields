import createTemplate from "./template.js";

export default class BotManagerSelect extends HTMLElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ["disabled"];
  }
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

  get disabled() {
    return this.getAttribute("disabled");
  }

  serializedData() {
    return {
      name: this.name,
      value: this.value,
    };
  }

  _onChangeSelect = (evt) => {
    this.value = this.select.options[this.select.selectedIndex].value;
  };

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (typeof newVal === "string") {
      this.select.setAttribute(attrName, newVal);
    } else {
      this.select.removeAttribute(attrName);
    }
  }

  connectedCallback() {
    this.style.gridColumn = this.span;
  }

  disconnectedCallback() {
    this.select.removeEventListener("change", this._onChangeSelect);
  }
}
