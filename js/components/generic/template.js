const createTemplate = (props) => {
  const span = props.span ? `1 / span ${props.span.value}` : "initial";
  const template = document.createElement("template");
  // Template HTML
  template.innerHTML = `
        <style>
            .generic-container {}
            ::slotted(p) {
                font-size: 80%;
                font-weight: normal;
            }
            ::slotted(h1), ::slotted(h2), ::slotted(h3),
            ::slotted(h4), ::slotted(h5), ::slotted(h6) {
                margin: 16px 0;
                line-height: 1;
            }
        </style>
        <div class="generic-container">
            <slot name="generic-child"></slot>
        </div>
    `;

  return {
    template,
    span,
  };
};

export default createTemplate;
