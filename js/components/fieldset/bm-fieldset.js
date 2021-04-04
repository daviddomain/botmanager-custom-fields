import createTemplate from "./template.js";

export default class BotManagerFieldset extends HTMLElement {
  constructor() {
    super();
    const attributes = this.attributes;
    const templateAndProps = createTemplate(attributes);
    this.collapsible = templateAndProps.collapsible;
    this.switchable = templateAndProps.switchable;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      templateAndProps.template.content.cloneNode(true)
    );

    this.fieldset = this.shadowRoot.querySelector("fieldset");
    document.addEventListener("DOMContentLoaded", this._domContentLoaded);
    if (this.collapsible) {
      this._getDismiss().addEventListener("click", this._toggleFieldset);
    }
    if (this.switchable) {
      this.fieldset
        .querySelector("legend")
        .firstElementChild.addEventListener("change", (evt) => {
          const inputElements = this.shadowRoot
            .querySelector("slot")
            .assignedNodes();
          if (typeof evt.detail.checked === "string") {
            inputElements.forEach((elem) => elem.removeAttribute("disabled"));
          } else {
            inputElements.forEach((elem) => elem.setAttribute("disabled", ""));
          }
        });
    }
    window.addEventListener("resize", this._onWinResize);
  }

  _getDismiss() {
    return this.shadowRoot.querySelector(".dismiss");
  }

  _getSwitch() {
    return this.shadowRoot.querySelector(".dismiss");
  }

  _toggleFieldset = (evt) => {
    this.fieldset.classList.toggle("hide");
  };

  _resizeFieldset() {
    const divHeight = this.fieldset.querySelector("div").getBoundingClientRect()
      .height;
    this.fieldset.style.maxHeight = divHeight + 150 + "px";
  }

  _domContentLoaded = (evt) => {
    this._resizeFieldset();
  };

  _onWinResize = (evt) => {
    this._resizeFieldset();
  };

  connectedCallback() {
    if (this.switchable) {
      const inputElements = this.shadowRoot
        .querySelector("slot")
        .assignedNodes();
      inputElements.forEach((elem) => elem.setAttribute("disabled", ""));
    }
  }

  disconnectedCallback() {
    document.removeEventListener("DOMContentLoaded", this._domContentLoaded);
    if (this.collapsible) {
      this._getDismiss().removeEventListener("click", this._toggleFieldset);
    }
    window.removeEventListener("resize", this._onWinResize);
  }
}
