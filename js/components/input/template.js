const createTemplate = (props) => {
  // Props
  const template = document.createElement("template");
  const name = props.name.value;
  const value = props.value.value;
  const span = props.span ? `1 / span ${props.span.value}` : "initial";
  const label = props.label ? props.label.value : "";
  const tooltip = props.tooltip.value;
  const slider = props.slider ? props.slider.localName : "";
  const min = props.min ? props.min.value : "1";
  const max = props.max ? props.max.value : "100";
  const step = props.step ? props.step.value : "1";
  const type = props.type ? props.type.value : "text";
  const trackVal = ((value - min) / (max - min)) * 100;

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

  // Unit of measurement style
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

  // Main Input
  const mainInput =
    type === "number"
      ? `<input name="${name}" type="${type}" value="${value}" min="${min}" max="${max}" step="${step}" class="bot-input" />`
      : `<input name="${name}" type="${type}" value="${value}" class="bot-input" />`;

  // Slider
  const sliderElem = slider
    ? `
    <input type="range" min="${min}" max="${max}" step="${step}" value="${value}" class="slider" />
    `
    : "";

  // Tooltip
  const tooltipElements = tooltip
    ? `
    <span class="tooltip-icon">&#63;</span>
    <div class="tooltip-container">
      <span class="tooltip-content">${tooltip}</span>
    </div>
    `
    : "";

  // Template HTML
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
        <label for="${name}">${label}</label>
        ${tooltipElements}
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
    span,
    value,
    type,
    sldValueClr,
    sldTrackClr,
  };
};

export default createTemplate;
