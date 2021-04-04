import tooltipStyles from "../tooltip/bm-tooltip-styles.js";

const createTemplate = (props) => {
  //Props
  const template = document.createElement("template");
  const name = props.name.value;
  const disabled = props.disabled ? "disabled" : "";
  const span = props.span ? `1 / span ${props.span.value}` : "initial";
  const label = props.label ? props.label.value : "";
  const tooltip = props.tooltip ? props.tooltip.value : "";
  const options = JSON.parse(props.data.value).options.reduce(
    (acc, next) => `${acc}<option value="${next.value}">${next.name}</option>`,
    ""
  );

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
  const focusBrdClr = props.focusBrdClr ? props.focusBrdClr.value : "#6a6e73";

  const tooltipContentStyle = tooltip
    ? tooltipStyles(ttBgClr, ttClr, ttBrdClr)
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
      .custom-select {
        width: 100%;
      }
      select {
        width: 100%;
        padding: 7.8px 34px 7.8px 12px;
        background-color: ${inpBgClr};
        border: 1px solid ${inpBrdClr};
        border-radius: 6px;
        color: ${inpClr};
        appearance: none;
        -moz-appearance:none;
        -webkit-appearance: none;
        cursor: pointer;
      }
      select:focus {
        outline: none;
        box-shadow: inset 0 0 0 1px ${focusBrdClr}, 0 0 10px 2px rgba(255,255,255, 0.3);
      }
      select:disabled {
        opacity: 0.3;
        cursor: initial;
      }
      .custom-select {
        position: relative;
      }
      .custom-arrow {
        background-color: transparent;
        display: block;
        width: 22px;
        position: absolute;
        top: 2px;
        right: 2px;
        height: 27px;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        pointer-events: none;
        text-align: center;
      }
    </style>
    <div class="input-control">
      <div>
        <label for="${name}">${label}</label>
        ${botmanagerTooltip}
      </div>
      <div class="custom-select">
        <select name="${name}" ${disabled}>
          ${options}
        </select>
        <span class="custom-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>        
        </span>
      </div>
    </div>
`;

  return {
    template,
    span,
  };
};

export default createTemplate;
