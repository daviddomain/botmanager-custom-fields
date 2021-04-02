const createTemplate = (props) => {
  const template = document.createElement("template");
  const columns = props.columns ? props.columns.value : "1";

  template.innerHTML = `
    <style>
      fieldset {
        position: relative;
        background-color: #32373d;
        border-radius: 6px;
        border: 0;
        font-weight: bold;
        font-size: 120%;
        color: #e1eeff;
        padding: 40px 6px 0;
        max-height: 800px;
        overflow: hidden;
        transition: all 0.28s ease-out;
      }
      fieldset.hide {
        max-height: 64px !important;
      }
      fieldset span {
        display: inline-block;
        width: 18px;
        height: 18px;
        color: #abb6c3;
        background-color: #161a1e;
        border-radius: 50%;
        text-align: center;
        line-height: 18px;
        vertical-align: middle;
        padding: 0 1px 2px 0;
        position: absolute;
        right: 16px;
        top: 0px;
        font-size: 100%;
        transform: rotate(90deg);
        cursor: pointer;
        z-index: 10;
        -webkit-touch-callout: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
      }
      fieldset.hide span {
        transform: rotate(-90deg);
      }
      fieldset div {
        display: flex;
        opacity: 1;
        flex-direction: column;
        align-items: stretch;
        padding: 16px 20px;
        border-top: 1px solid #5c6671;
        transition: all 0.12s ease;
      }
      fieldset.hide div {
        border-color: transparent;
        opacity: 0;
      }
      legend {
        position: relative;
        transform: translateY(32px);
        padding: 16px 20px 0;
        width: auto;
        line-height: 48px;
      }
      @media screen and (min-width: 768px) {
          fieldset div {
            display: grid;
            grid-template-columns: repeat(${columns}, 1fr);
            grid-template-columns: 1fr
            grid-template-rows: auto;
            column-gap: 20px;
            row-gap: 20px;
          }
      }
    </style>
    <fieldset>
        <span class="dismiss">&lsaquo;</span>
        <legend>Foo</legend>
        <div>
            <slot name="fieldset-child"></slot>
        </div>
    </fieldset>
`;

  return template;
};

export default class BotManagerFieldset extends HTMLElement {
  constructor() {
    super();
    const attributes = this.attributes;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      createTemplate(attributes).content.cloneNode(true)
    );

    this.fieldset = this.shadowRoot.querySelector("fieldset");
  }

  _getLegend() {
    return this.shadowRoot.querySelector("legend");
  }

  _getDismiss() {
    return this.shadowRoot.querySelector(".dismiss");
  }

  _getFieldset() {
    return this.shadowRoot.querySelector("fieldset");
  }

  _toggleFieldset = (evt) => {
    this.fieldset.classList.toggle("hide");
  };

  _domContentLoaded = (evt) => {
    this.fieldset.style.maxHeight =
      this.fieldset.getBoundingClientRect().height + "px";
  };

  connectedCallback() {
    const attributes = this.attributes;
    const legend = attributes.legend ? attributes.legend.value : "";
    this._getLegend().textContent = legend;
    this._getDismiss().addEventListener("click", this._toggleFieldset);
    document.addEventListener("DOMContentLoaded", this._domContentLoaded);
  }
}
