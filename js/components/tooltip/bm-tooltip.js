import createTemplate from "./template.js";

export default class BotManagerTooltip extends HTMLElement {
  constructor() {
    super();
    const attributes = this.attributes;
    const templateAndProps = createTemplate(attributes);
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      templateAndProps.template.content.cloneNode(true)
    );

    this.template = document.importNode(
      this.shadowRoot.querySelector("template").content,
      true
    );
    this.tooltipIcon = this.shadowRoot.querySelector(".tooltip-icon");
    this.tooltipIcon.addEventListener("click", this._onClickTtIcon);
    this.inputControl = null;
  }

  _onClickTtIcon = () => {
    this.inputControl.classList.toggle("show-tooltip");
  };

  connectedCallback() {
    this.inputControl = this.getRootNode().querySelector(".input-control");
    this.inputControl.prepend(this.template);
  }

  disconnectedCallback() {
    this.tooltipIcon.removeEventListener("click", this._onClickTtIcon);
  }
}
