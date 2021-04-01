const template = document.createElement('template');

template.innerHTML = `
    <style>
      .input-control * {
        box-sizing: border-box;
      }
      .input-control: {
        --bg-color:
      }
      .input-control {
        display: flex;
        align-items: center;
        padding: 6px 9px;
        font-family: sans-serif;
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
        background-color: #a5a2a2;
        margin-left: 12px;
        text-align: center;
        line-height: 22px;
        vertical-align: middle;
        color: white;
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
      <input type="text" />
      <span class="tooltip-icon">&#63;</span>
      <div class="tooltip-container">
        <span class="tooltip-content"></span>
      </div>
    </div>
    `;

class BotManagerTextInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  serializedData() {
    return {
      name: this._getInputElement().name,
      value: this._getInputElement().value,
    };
  }

  _getInputElement() {
    return this.shadowRoot.querySelector('.input-control').firstElementChild;
  }

  _getTooltipElements() {
    return {
      icon: this.shadowRoot.querySelector('.tooltip-icon'),
      container: this.shadowRoot.querySelector('.tooltip-container'),
    };
  }

  _setTooltip(data) {
    const tooltip = this._getTooltipElements();
    if (typeof data === 'string' && data) {
      tooltip.container.firstElementChild.textContent = data;
      return tooltip;
    }
    tooltip.icon.style.display = 'none';
    tooltip.container.style.display = 'none';
  }

  connectedCallback() {
    const attributes = this.attributes;
    const name = attributes.name.value;
    const tooltip = attributes.tooltip ? attributes.tooltip.value : '';
    this._getInputElement().setAttribute('name', name);
    this._setTooltip(tooltip);
    if (tooltip) {
    }
    this._getTooltipElements().container.firstElementChild.textContent = tooltip;
  }
}

window.customElements.define('botmanager-text-input', BotManagerTextInput);
