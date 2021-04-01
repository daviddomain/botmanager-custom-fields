const template = document.createElement("template");

template.innerHTML = `
    <style>
      .input-control * {
        box-sizing: border-box;
      }
      .input-control: {
        --bg-color: black;
      }
      .input-control {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 6px 9px;
        font-family: sans-serif;
      }
      .input-control div {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
      }
       .input-control label {
        font-weight: bold;
      }
      .input-control input {
        min-height: 32px;
        padding: 0 6px;
      }
      .tooltip-icon {
        display: inline-block;
        height: 22px;
        width: 22px;
        border-radius: 50%;
        background-color: #abb6c3;
        margin-left: 12px;
        text-align: center;
        line-height: 22px;
        vertical-align: middle;
        color: #192029;
        font-weight: bold;
        font-size: 85%;
        user-select: none;
        -webkit-user-select: none;
        flex: 0 0 22px;
      }
      .tooltip-container {
        position: relative;
      }
      .tooltip-container .tooltip-content {
        position: absolute;
        display: block;
        opacity: 0;
        padding: 6px 12px;
        font-size: 76%;
        min-width: 260px;
        transition: opacity 0.3s linear;
      }
      .tooltip-icon:hover + .tooltip-container .tooltip-content {
        opacity: 1;
      }
    </style>

    
    <div class="input-control">
      <div>
        <label></label>
        <span class="tooltip-icon">&#63;</span>
        <div class="tooltip-container">
          <span class="tooltip-content"></span>
        </div>
      </div>
      <input type="text" />
    </div>
    `;

//

class BotManagerTextInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  serializedData() {
    return {
      name: this._getInputElement().name,
      value: this._getInputElement().value,
    };
  }

  _getInputElement() {
    return this.shadowRoot.querySelector(".input-control").lastElementChild;
  }

  _getLabelElement() {
    return this.shadowRoot.querySelector("label");
  }

  _getTooltipElements() {
    return {
      icon: this.shadowRoot.querySelector(".tooltip-icon"),
      container: this.shadowRoot.querySelector(".tooltip-container"),
    };
  }

  _setTooltip(data) {
    const tooltip = this._getTooltipElements();
    if (typeof data === "string" && data) {
      tooltip.container.firstElementChild.textContent = data;
      return tooltip;
    }
    tooltip.icon.style.display = "none";
    tooltip.container.style.display = "none";
  }

  connectedCallback() {
    const attributes = this.attributes;
    const label = attributes.label ? attributes.label.value : "";
    const name = attributes.name ? attributes.name.value : "";
    const tooltip = attributes.tooltip ? attributes.tooltip.value : "";
    const labelElem = this._getLabelElement();

    labelElem.textContent = label;
    labelElem.setAttribute("for", name);
    this._getInputElement().setAttribute("name", name);
    this._setTooltip(tooltip);
  }
}

window.customElements.define("botmanager-text-input", BotManagerTextInput);
