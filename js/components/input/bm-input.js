import createTemplate from "./template.js";
import errorHanlder from "./error-handler.js";

export default class BotManagerInput extends HTMLElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ["disabled"];
  }

  constructor() {
    super();
    const attributes = this.attributes;
    errorHanlder(attributes);
    const templateAndProps = createTemplate(attributes);
    this.name = attributes.name.value;
    this.type = templateAndProps.type;
    this.slider = templateAndProps.slider;
    this.span = templateAndProps.span;
    this.min = templateAndProps.min;
    this.max = templateAndProps.max;
    this.step = templateAndProps.step;
    this.sldValueClr = templateAndProps.sldValueClr;
    this.sldTrackClr = templateAndProps.sldTrackClr;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      templateAndProps.template.content.cloneNode(true)
    );

    this.mainInput = this.shadowRoot.querySelector(
      `.input-control input[type=${this.type}]`
    );

    if (this.slider) {
      this.rangeSlider = this.shadowRoot.querySelector(
        ".input-control input[type=range]"
      );
    }
    if (this.slider) {
      this.rangeSlider.addEventListener("input", this._sliderInputHandler);
    }
    this.mainInput.addEventListener("input", this._textInputHandler);
  }

  get name() {
    return this.getAttribute("name");
  }

  set name(name) {
    return this.setAttribute("name", name);
  }

  get value() {
    return this.getAttribute("value");
  }

  set value(newValue) {
    this.setAttribute("value", newValue);
  }

  _setValue(value) {
    if (this.slider) {
      this.rangeSlider.value = value;
    }
    this.mainInput.value = value;
    this.value = value;
  }

  serializedData() {
    return {
      name: this.name,
      value: this.value,
    };
  }

  _setSliderBgStyle = (value) => {
    let trackVal = ((value - this.min) / (this.max - this.min)) * 100;
    this.rangeSlider.style.background = `linear-gradient(to right, ${this.sldValueClr} 0%, ${this.sldValueClr} ${trackVal}%, ${this.sldTrackClr} ${trackVal}%, ${this.sldTrackClr} 100%)`;
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

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (typeof newVal === "string") {
      this.mainInput.setAttribute(attrName, newVal);
      this.slider && this.slider.setAttribute(attrName, newVal);
    } else {
      this.mainInput.removeAttribute(attrName);
      this.slider && this.slider.removeAttribute(attrName);
    }
  }

  connectedCallback() {
    this.style.gridColumn = this.span;
  }

  disconnectedCallback() {
    if (this.slider) {
      this.rangeSlider.removeEventListener("input", this._sliderInputHandler);
    }
    this.mainInput.removeEventListener("input", this._textInputHandler);
  }
}
