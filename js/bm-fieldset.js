const createTemplate = (props) => {
  const template = document.createElement("template");
  const columns = props.columns ? props.columns.value : "1";

  template.innerHTML = `
    <style>
      fieldset {
        background-color: #32373d;
        border-radius: 6px;
        border: 0;
        font-weight: bold;
        font-size: 120%;
        color: #e1eeff;
        padding: 40px 6px 0;
      }
      fieldset div {
        display: flex;
        flex-direction: column;

        align-items: stretch;
        padding: 16px 20px;
        border-top: 1px solid #5c6671;
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
  }

  _getLegend() {
    return this.shadowRoot.querySelector("legend");
  }

  connectedCallback() {
    const attributes = this.attributes;
    const legend = attributes.legend ? attributes.legend.value : "";
    this._getLegend().textContent = legend;
  }
}
