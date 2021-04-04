const tooltipStyles = (ttBgClr, ttClr, ttBrdClr) => {
  return `
  .tooltip-content {
        position: absolute;
        display: block;
        opacity: 0;
        padding: 16px 18px;
        min-height: 100%;
        font-weight: normal;
        font-size: 72%;
        background-color: ${ttBgClr};
        color: ${ttClr};
        border-radius: 4px;
        width: 100%;
        top: 68px;
        right: 0;
        z-index: 2;
        border: 1px solid ${ttBrdClr};
        transition: all 0.2s linear;
        pointer-events: none;
      }
      .show-tooltip .tooltip-content {
        opacity: 1;
        top: 44px;
      }
  `;
};

export default tooltipStyles;
