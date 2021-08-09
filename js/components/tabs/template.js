const createTemplate = (props) => {
  const span = props.span ? `1 / span ${props.span.value}` : "initial";
  const tabs = props.tabs.value.split(",");
  const template = document.createElement("template");

  // Template HTML
  template.innerHTML = `
    <style>
        .nav-tabs {
            display: flex;
            list-style-type: none;
            padding: 0;
            margin: 16px 0 32px;
            font-weight: normal;
            font-size: 80%;
        }
        .nav-tabs li {
            margin: 0 24px 0 0;
            cursor: pointer;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -o-user-select: none;
            user-select: none;
        }
        .nav-tabs li.active {
            border-bottom: 1px solid #e1eeff;
            padding-bottom: 8px;
        }
        ::slotted(.tab-content) {
            display: none;
        }
        ::slotted(.show) {
            display: block;
        }
    </style>
    <div class="tabset">
        <ul class="nav-tabs">
        ${tabs
          .map((tab, idx) =>
            idx
              ? `<li role="presentation">${tab}</li>`
              : `<li role="presentation" class="active">${tab}</li>`
          )
          .join("")}
        </ul>
        <slot></slot>
    </div>
  `;

  return {
    template,
    span,
    tabs,
  };
};

export default createTemplate;
