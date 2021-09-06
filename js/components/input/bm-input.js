import createTemplate from "./template.js";
import errorHanlder from "./error-handler.js";

export default class BotManagerInput extends HTMLElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ["disabled", "value"];
  }

  constructor() {
    super();
    const attributes = this.attributes;
    errorHanlder(attributes);
    const templateAndProps = createTemplate(attributes);
    this.name = attributes.name.value;
    this.type = templateAndProps.type;
    this.erase = templateAndProps.erase;
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
      this.rangeSlider.addEventListener("input", this._sliderInputHandler);
    }

    if (this.mainInput) {
      //this.mainInput.addEventListener("input", this._textInputHandler);
    }
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

  get disabled() {
    return this.getAttribute("disabled");
  }

  _setValue(value) {
    if (this.slider) {
      value ? (this.rangeSlider.value = value) : (this.rangeSlider.value = 0);
    }
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
    if (this.erase) {
      const regex = new RegExp(this.erase, "gi");
      const value = evt.target.value.replace(regex, "");
      if (this.slider) {
        this._setSliderBgStyle(value);
      }
      this._setValue(value);
      this.dispatchEvent(new CustomEvent("valueChange", { detail: value }));
    } else {
      const value = evt.target.value;
      if (this.slider) {
        this._setSliderBgStyle(value);
      }
      this._setValue(value);
      this.dispatchEvent(new CustomEvent("valueChange", { detail: value }));
    }
  };

  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case "disabled":
        if (typeof newVal === "string") {
          this.mainInput && this.mainInput.setAttribute(attrName, newVal);
          this.slider && this.rangeSlider.setAttribute(attrName, newVal);
          this.slider && this.rangeSlider.classList.add("disabled");
          this.slider && console.log(this.rangeSlider.parentElement);
        } else {
          this.mainInput.removeAttribute(attrName);
          this.slider && this.rangeSlider.removeAttribute(attrName);
          this.slider && this.rangeSlider.classList.remove("disabled");
        }
        break;
      case "value":
        console.log("attr changed:", newVal);
        //this.mainInput && this.mainInput.setAttribute(attrName, newVal);
        if (this.mainInput) {
          this.mainInput.setAttribute(attrName, newVal);
          this.mainInput.value = newVal;
        }
      default:
        break;
    }
    if (attrName === "disabled") {
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
