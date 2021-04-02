const createTemplate = (props) => {
  const template = document.createElement("template");
  const slider = props.slider ? props.slider.localName : "";
  const min = props.min ? props.min.value : "1";
  const max = props.max ? props.max.value : "100";
  const step = props.step ? props.step.value : "1";
  const value = props.value ? props.value.value : "50";
  const type = props.type ? props.type.value : "text";

  // Colors
  const labelClr = props.labelClr ? props.labelClr.value : "#abb6c3";
  const ttIconClr = props.ttIconClr ? props.ttIconClr.value : "#192029";
  const ttIconBgClr = props.ttIconBgClr ? props.ttIconBgClr.value : "#abb6c3";
  const ttBgClr = props.ttBgClr ? props.ttBgClr.value : "#656d78";
  const ttClr = props.ttClr ? props.ttClr.value : "#e5e6e7";
  const ttBrdClr = props.ttBrdClr ? props.ttBrdClr.value : "#6a7680";
  const inpBgClr = props.inpBgClr ? props.inpBgClr.value : "#161a1e";
  const inpClr = props.inpClr ? props.inpClr.value : "#e1eeff";
  const inpBrdClr = props.inpBrdClr ? props.inpBrdClr.value : "#5c6671";
  const sldValueClr = props.sldValueClr ? props.sldValueClr.value : "#82CFD0";
  const sldTrackClr = props.sldTrackClr ? props.sldTrackClr.value : "#475260";
  const sldThumbClr = props.sldThumbClr ? props.sldThumbClr.value : "#ffffff";
  const uomClr = props.uomClr ? props.uomClr.value : "#757c85";

  const unitOfMesurement = props.uom
    ? `
    .input-control::after {
        content: '${props.uom.value}';
        display: inline-block;
        height: 32px;
        width: 100px;
        color: ${uomClr};
        position: absolute;
        bottom: ${props.slider ? "30px" : "-2px"};
        right: 0;
        font-weight: normal;
        font-size: 70%;
        z-index: 1;
        text-align: right;
        padding-right: 12px;
    }
  `
    : "";
  const mainInput =
    type === "number"
      ? `<input type="${type}" min="${min}" max="${max}" step="${step}" class="bot-input" />`
      : `<input type="${type}" class="bot-input" />`;
  const sliderElem = slider
    ? `
    <input type="range" min="${min}" max="${max}" step="${step}" value="${value}" class="slider" />
    `
    : "";
  const trackVal = ((value - min) / (max - min)) * 100;
  template.innerHTML = `
    <style>
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      input[type=number] {
        -moz-appearance: textfield;
      }
      .input-control * {
        box-sizing: border-box;
      }
      .input-control {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 6px 0;
        position: relative;
      }
      .input-control div {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
      }
       .input-control label {
         font-size: 80%;
        font-weight: bold;
        color: ${labelClr};
      }
      .input-control .bot-input {
        min-height: 32px;
        width: 100%;
        padding: 0 12px;
        background-color: ${inpBgClr};
        border: 1px solid ${inpBrdClr};
        border-radius: 6px;
        color: ${inpClr};
      }
      .input-control .slider {
          -webkit-appearance: none;
          margin: 24px 0 0 0;
          padding: 0;
          width: 100%;
          min-height: 8.4px;
          height: 8.4px;
          background: linear-gradient(to right, ${sldValueClr} 0%, ${sldValueClr} ${trackVal}%, ${sldTrackClr} ${trackVal}%, ${sldTrackClr} 100%);
          transition: background 450ms ease-in;
          border: none;
          border-radius: 4.4px;
      }
      .input-control .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
      }

      .input-control .slider:focus {
        outline: none;
      }

      .input-control .slider::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent; 
        border-color: transparent;
        color: transparent;
      }
      .input-control .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background-color: ${sldThumbClr};
        cursor: pointer;
        margin-top: -3.4px;
      }
      .input-control .slider::-webkit-slider-runnable-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        border-radius: 4.4px;
        border: none;
        background: transparent;
      }
      .input-control .slider::-moz-range-thumb {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background-color: ${sldThumbClr};
        cursor: pointer;
        box-shadow: none;
        border: none;
      }
      .input-control .slider::-moz-range-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        border-radius: 4.4px;
        border: none;
        background: transparent;
      }
      ${unitOfMesurement}
      .tooltip-icon {
        display: inline-block;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background-color: ${ttIconBgClr};
        margin-left: 12px;
        text-align: center;
        line-height: 18px;
        vertical-align: middle;
        color: ${ttIconClr};
        font-weight: bold;
        font-size: 72%;
        user-select: none;
        -webkit-user-select: none;
        flex: 0 0 18px;
      }
      .tooltip-container {
        position: relative;
        pointer-events: none;
      }
      .tooltip-container .tooltip-content {
        position: absolute;
        display: block;
        opacity: 0;
        padding: 12px 18px;
        font-weight: normal;
        font-size: 60%;
        min-width: 250px;
        max-width: 280px;
        background-color: ${ttBgClr};
        color: ${ttClr};
        border-radius: 4px;
        top: 26px;
        left: calc(50% - 100px);
        z-index: 2;
        border: 1px solid ${ttBrdClr};
        transition: opacity 0.3s linear;
      }
      .tooltip-content::before {
        content: '';
        position: absolute;
        display: inline-block;
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 0 8px 12px 8px;
        border-color: transparent transparent ${ttBgClr} transparent;
        top: -8px;
        left: calc(50% - 40px);
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
      ${mainInput}
      ${sliderElem}
    </div>
    `;
  return {
    template,
    slider,
    min,
    max,
    step,
    value,
    type,
    sldValueClr,
    sldTrackClr,
  };
};

export default class BotManagerInput extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    const attributes = this.attributes;
    const templateAndProps = createTemplate(attributes);
    if (!attributes.slot)
      throw new Error(`Missing a slot attribute on a botmanager-input field.`);
    if (!attributes.name)
      throw new Error(`Missing a name attribute on a botmanager-input field.`);
    if (!attributes.value)
      throw new Error(`Missing a value attribute on a botmanager-input field.`);
    if (
      (attributes.slider && !attributes.type) ||
      (attributes.slider && attributes.type.value === "text")
    )
      throw new Error(
        `Slider will only work with input type="number". Please fix input ${attributes.name.value}.`
      );
    this.name = attributes.name.value;
    this.type = templateAndProps.type;
    this.slider = templateAndProps.slider;
    this.min = templateAndProps.min;
    this.max = templateAndProps.max;
    this.step = templateAndProps.step;
    this.sldValueClr = templateAndProps.sldValueClr;
    this.sldTrackClr = templateAndProps.sldTrackClr;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      templateAndProps.template.content.cloneNode(true)
    );
  }

  get value() {
    return this.getAttribute("value");
  }

  set value(newValue) {
    this.setAttribute("value", newValue);
  }

  _setValue(value) {
    this.shadowRoot.querySelector(
      ".input-control input[type=range]"
    ).value = value;

    this.shadowRoot.querySelector(
      `.input-control input[type=${this.type}]`
    ).value = value;
    this.value = value;
  }

  serializedData() {
    return {
      name: this._getInputElement().name,
      value: this._getInputElement().value,
    };
  }

  _getInputElement(isSlider) {
    if (isSlider) {
      return this.shadowRoot.querySelector(".input-control").lastElementChild
        .previousElementSibling;
    }
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

  _serializeAttributes(attributes) {
    return attributes.reduce((acc, curr) => {
      acc[curr.localName] = curr.value;
      return acc;
    }, {});
  }

  _setSliderBgStyle = (value) => {
    let trackVal = ((value - this.min) / (this.max - this.min)) * 100;
    this._getInputElement(
      !this.slider
    ).style.background = `linear-gradient(to right, ${this.sldValueClr} 0%, ${this.sldValueClr} ${trackVal}%, ${this.sldTrackClr} ${trackVal}%, ${this.sldTrackClr} 100%)`;
  };

  _sliderInputHandler = (evt) => {
    const value = evt.target.value;
    this._setSliderBgStyle(value);
    this._setValue(value);
  };

  _textInputHandler = (evt) => {
    const value = evt.target.value;
    if (this.slider) {
      this._setSliderBgStyle(value);
    }
    this._setValue(value);
  };

  connectedCallback() {
    const attributes = this._serializeAttributes(Array.from(this.attributes));
    const slider = attributes.hasOwnProperty("slider");
    const labelElem = this._getLabelElement();
    labelElem.textContent = attributes.label;
    labelElem.setAttribute("for", attributes.name);
    this._getInputElement(slider).setAttribute("name", attributes.name);
    this._getInputElement(slider).setAttribute("value", attributes.value || "");
    this._setTooltip(attributes.tooltip);
    this.style.gridColumn = attributes.span
      ? `1 / span ${attributes.span}`
      : "initial";

    if (this.slider) {
      this._getInputElement(!this.slider).addEventListener(
        "input",
        this._sliderInputHandler
      );
      this._getInputElement(this.slider).addEventListener(
        "input",
        this._textInputHandler
      );
    }
  }

  disconnectedCallback() {}
}
