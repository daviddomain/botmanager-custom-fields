const createTemplate = (props) => {
  const template = document.createElement("template");
  // Template HTML
  template.innerHTML = `
    <style>
      .tooltip-icon {
        display: inline-block;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background-color: ${props.ttIconBgClr.value};
        text-align: center;
        line-height: 18px;
        vertical-align: middle;
        color: ${props.ttIconClr.value};
        font-weight: bold;
        font-size: 72%;
        user-select: none;
        -webkit-user-select: none;
        flex: 0 0 18px;
        cursor: pointer;
      }
      @media screen and (min-width: 768px) {}
    </style>
    <span class="tooltip-icon">&#63;</span>
    <template>
        <span class="tooltip-content">${props.tooltip.value}</span>
    </template>
    `;

  return {
    template,
  };
};

export default createTemplate;
