const createTemplate = (props) => {
  const template = document.createElement("template");

  const labelClr = props.labelClr ? props.labelClr.value : "#abb6c3";

  template.innerHTML = `
    <style>
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
    </style>
    <div class="input-control">
      <div>
        <label></label>
        <span class="tooltip-icon">&#63;</span>
        <div class="tooltip-container">
          <span class="tooltip-content"></span>
        </div>
      </div>
      <select></select>
    </div>
`;

  return template;
};

export default class BotManagerSelect extends HTMLElement {
  constructor() {
    super();
    const attributes = this.attributes;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      createTemplate(attributes).content.cloneNode(true)
    );
  }

  connectedCallback() {
    const attributes = this.attributes;
  }
}
