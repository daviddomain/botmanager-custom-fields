import tooltipStyles from "../tooltip/bm-tooltip-styles.js";

const createTemplate = (props) => {
  // Props
  const template = document.createElement("template");
  const name = props.name.value;
  const value = props.value.value;
  const disabled = props.disabled ? "disabled" : "";
  const span = props.span ? `1 / span ${props.span.value}` : "initial";
  const label = props.label ? props.label.value : "";
  const tooltip = props.tooltip ? props.tooltip.value : "";
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
  const focusBrdClr = props.focusBrdClr ? props.focusBrdClr.value : "#6a6e73";

  // Unit of measurement style
  const unitOfMesurement = props.uom
    ? `
    .input-control::after {
        content: '${props.uom.value}';
        display: inline-block;
        width: auto;
        color: ${uomClr};
        position: absolute;
        bottom: ${props.slider ? "50px" : "6px"};
        right: 0;
        font-weight: normal;
        font-size: 70%;
        z-index: 1;
        text-align: right;
        padding: 7.8px 12px 7.8px 0;
    }
  `
    : "";

  const tooltipContentStyle = tooltip
    ? tooltipStyles(ttBgClr, ttClr, ttBrdClr, ttBgClr)
    : "";

  const botmanagerTooltip = tooltip
    ? `
    <botmanager-tooltip
      ttIconBgClr="${ttIconBgClr}"
      ttIconClr="${ttIconClr}"
      ttBgClr="${ttBgClr}"
      ttClr="${ttClr}"
      ttBrdClr="${ttBrdClr}"
      tooltip="${tooltip}"
    ></botmanager-tooltip>
    `
    : "";

  // Main Input
  const mainInput =
    type === "number"
      ? `<input name="${name}" type="${type}" value="${value}" min="${min}" max="${max}" step="${step}" class="bot-input" ${disabled} />`
      : `<input name="${name}" type="${type}" value="${value}" class="bot-input" ${disabled} />`;

  // Slider
  const sliderElem = slider
    ? `
    <div>
      <output for="${name + "_slider"}" value="${value}"></output>
      <input type="range" name="${
        name + "_slider"
      }" min="${min}" max="${max}" step="${step}" value="${value}" class="slider" ${disabled} />
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
      input[type=number]:focus, input[type=text]:focus {
        outline: none;
        box-shadow: inset 0 0 0 1px ${focusBrdClr}, 0 0 10px 2px rgba(255,255,255, 0.3);
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
      ${tooltipContentStyle}
      .input-control div {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        margin-bottom: 12px;
        width: 100%;
      }
       .input-control label {
         font-size: 80%;
        font-weight: bold;
        color: ${labelClr};
        flex: 1;
      }
      .input-control .bot-input {
        width: 100%;
        padding: 7.8px 12px 7.8px;
        background-color: ${inpBgClr};
        border: 1px solid ${inpBrdClr};
        border-radius: 6px;
        color: ${inpClr};
      }
      .input-control .bot-input:disabled {
        opacity: 0.3;
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
        box-shadow: inset 0 0 0 1px ${focusBrdClr}, 0 0 10px 2px rgba(255,255,255, 0.3);
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
      .input-control .slider::-webkit-slider-thumb::before {
        content: "foo";
        display: inline-block;
        width: 32px;
        height: 32px;
        background: tomato;
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
      @media screen and (min-width: 768px) {}
    </style>
    <div class="input-control">
      <div>
        <label for="${name}">${label}</label>
        ${botmanagerTooltip}
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
