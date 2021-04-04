const createTemplate = (props) => {
  const template = document.createElement("template");
  const columns = props.columns ? props.columns.value : "1";
  const legend = props.legend ? props.legend.value : "";
  const collapsible = props.collapsible ? props.collapsible.localName : "";

  const dismiss = collapsible
    ? `
    <span class="dismiss">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>
    </span>
  `
    : "";

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
        box-sizing: border-box;
        transition: all 0.28s ease-out;
      }
      fieldset * {
        box-sizing: border-box;
      }
      fieldset.hide {
        max-height: 102px !important;
      }
      fieldset span {
        display: block;
        width: 22px;
        height: 22px;
        color: #abb6c3;
        background-color: #161a1e;
        border-radius: 50%;
        text-align: center;
        line-height: 20px;
        vertical-align: middle;
        position: absolute;
        right: 25px;
        top: 11px;
        font-size: 100%;
        cursor: pointer;
        z-index: 10;
        transform: rotate(-180deg);
        -webkit-touch-callout: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
      }
      fieldset.hide span {
        transform: rotate(360deg);
      }
      fieldset div {
        display: flex;
        opacity: 1;
        flex-direction: column;
        align-items: stretch;
        justify-content: stretch;
        padding: 16px 20px;
        margin-top: 16px;
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
        ${dismiss}
        <legend>${legend}</legend>
        <div>
            <slot name="fieldset-child"></slot>
        </div>
    </fieldset>
`;

  return {
    template,
    collapsible,
  };
};

export default createTemplate;
