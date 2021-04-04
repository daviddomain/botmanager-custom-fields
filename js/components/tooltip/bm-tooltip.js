const createTemplate = (props) => {
  const template = document.createElement("template");
  // Template HTML
  template.innerHTML = `
    <style>
      .tooltip-icon {
        display: inline-block;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background-color: ${props.ttIconBgClr.value};
        text-align: center;
        line-height: 18px;
        vertical-align: middle;
        color: ${props.ttIconClr.value};
        font-weight: bold;
        font-size: 72%;
        user-select: none;
        -webkit-user-select: none;
        flex: 0 0 18px;
        cursor: pointer;
      }
      @media screen and (min-width: 768px) {}
    </style>
    <span class="tooltip-icon">&#63;</span>
    <template>
        <span class="tooltip-content">${props.tooltip.value}</span>
    </template>
    `;

  return {
    template,
  };
};

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

  _onClickTtIcon = (evt) => {
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
