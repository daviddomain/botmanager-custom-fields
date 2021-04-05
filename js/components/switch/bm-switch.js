import createTemplate from "./template.js";

export default class BotManagerSwitch extends HTMLElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ["disabled"];
  }

  constructor() {
    super();
    const attributes = this.attributes;
    const templateAndProps = createTemplate(attributes);
    this.span = templateAndProps.span;
    //this.forFieldset = templateAndProps.forFieldset;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      templateAndProps.template.content.cloneNode(true)
    );

    this.switch = this.shadowRoot.querySelector(".switch");
    this.checkbox = this.shadowRoot.querySelector("input");
    this.checkbox.addEventListener("change", this._onCheckChange);
    this.checkbox.checked = templateAndProps.checked;
  }

  get name() {
    return this.getAttribute("name");
  }

  get checked() {
    return this.getAttribute("checked");
  }

  set checked(value) {
    if (value) {
      this.setAttribute("checked", "");
      return this;
    }
    this.removeAttribute("checked");
    return this;
  }

  get disabled() {
    return this.getAttribute("disabled");
  }

  serializedData() {
    return {
      name: this.name,
      value: this.checked === null ? false : true,
    };
  }

  _onCheckChange = () => {
    if (this.disabled) return;
    this.checked = this.checkbox.checked;
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: {
          checked: this.checked,
        },
        bubbles: true,
      })
    );
  };

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (typeof newVal === "string") {
      this.checkbox.setAttribute(attrName, newVal);
      this.switch.classList.add("disabled");
    } else {
      this.checkbox.removeAttribute(attrName);
      this.switch.classList.remove("disabled");
    }
  }

  connectedCallback() {
    this.style.gridColumn = this.span;
  }

  disconnectedCallback() {
    this.checkbox.removeEventListener("change", this._onCheckChange);
  }
}
