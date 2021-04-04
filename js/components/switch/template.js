import tooltipStyles from "../tooltip/bm-tooltip-styles.js";

const createTemplate = (props) => {
  const template = document.createElement("template");
  const forFieldset = props.for ? props.for.value : "";
  const name = forFieldset ? "" : props.name.value;
  const disabled = props.disabled ? "disabled" : "";
  const span = props.span ? `1 / span ${props.span.value}` : "initial";
  const label = props.label ? props.label.value : "";
  const tooltip = props.tooltip ? props.tooltip.value : "";
  const checked = props.checked ? props.checked.specified : false;

  // Colors
  const labelClr = props.labelClr ? props.labelClr.value : "#abb6c3";
  const checkedClr = props.checkedClr ? props.checkedClr.value : "#82CFD0";
  const bgClr = props.bgClr ? props.bgClr.value : "#475260";
  const thumbClr = props.thumbClr ? props.thumbClr.value : "#ffffff";
  const ttIconClr = props.ttIconClr ? props.ttIconClr.value : "#192029";
  const ttIconBgClr = props.ttIconBgClr ? props.ttIconBgClr.value : "#abb6c3";
  const ttBgClr = props.ttBgClr ? props.ttBgClr.value : "#656d78";
  const ttClr = props.ttClr ? props.ttClr.value : "#e5e6e7";
  const ttBrdClr = props.ttBrdClr ? props.ttBrdClr.value : "#6a7680";
  const focusBrdClr = props.focusBrdClr ? props.focusBrdClr.value : "#63686f";

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

  const switchElement = forFieldset
    ? `
    <label class=${
      disabled ? "switch disabled" : "switch"
    } style="margin-left:14px;transform:translateY(3px)">
      <input name="${name}" type="checkbox" ${disabled}>
      <span class="switch-slider"></span>
    </label>
    `
    : `
    <div class="input-control">
    <div>
      <label for="${name}">${label}</label>
      ${botmanagerTooltip}    
    </div>
      <div>
        <label class="switch">
          <input name="${name}" type="checkbox">
          <span class="switch-slider"></span>
        </label>
      </div>
    </div>
    `;

  // Template HTML
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
    .input-control > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 12px;
    }
    .input-control label {
        font-size: 80%;
      font-weight: bold;
      color: ${labelClr};
    }
    input-control:first-child {
      flex: 1;
    }
    .input-control label:first-child {
      margin: 0 12px 0 0;
    }
    .switch {
      position: relative;
      display: inline-block;
      height: 22px;
      flex: 0 0 48px;
      width: 48px;
      align-self: flex-end;
    }
    .switch.disabled {
      opacity: 0.3;
    }
    .switch.disabled .switch-slider {
      cursor: initial;
    }
    .switch input { 
      opacity: 0;
      width: 0;
      height: 0;
    }
    .switch-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${bgClr};
      border-radius: 34px;
      -webkit-transition: .4s;
      transition: .4s;
    }
    .switch-slider:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 6px;
      bottom: 3px;
      background-color: ${thumbClr};
      -webkit-transition: .4s;
      transition: .4s;
      border-radius: 50%;
    }
    input:checked + .switch-slider {
      background-color: ${checkedClr};
    }

    input:focus + .switch-slider {
      outline: none;
      box-shadow: inset 0 0 0 1px ${focusBrdClr}, 0 0 10px 2px rgba(255,255,255, 0.3);
    }

    input:focus:checked + .switch-slider {
      outline: none;
      box-shadow: 0 0 10px 2px rgba(255,255,255, 0.3);
    }

    input:checked + .switch-slider:before {
      -webkit-transform: translateX(20px);
      -ms-transform: translateX(20px);
      transform: translateX(20px);
    }
    </style>
    ${switchElement}
    `;

  return {
    template,
    span,
    checked,
  };
};

export default createTemplate;
