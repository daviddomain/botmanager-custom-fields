const createTemplate = (props) => {
  const template = document.createElement("template");

  const credentials = props.credentials
    ? props.credentials.value
    : "same-origin";
  const method = props.method ? props.method.value : "POST";
  const contentType = props.contentType
    ? props.contentType.value
    : "multipart/form-data";
  const btnText = props.btnText ? props.btnText.value : "Send";
  const bgClr = props.bgClr ? props.bgClr.value : "#161a1e";
  const textClr = props.textClr ? props.textClr.value : "#abb6c3";
  const btnBgClr = props.btnBgClr ? props.btnBgClr.value : "#32373d";
  const btnBgHoverClr = props.btnBgHoverClr
    ? props.btnBgHoverClr.value
    : "#abb6c3";
  const btnTextClr = props.btnTextClr ? props.btnTextClr.value : "#abb6c3";
  const btnTextHoverClr = props.btnTextHoverClr
    ? props.btnTextHoverClr.value
    : "#192029";

  template.innerHTML = `
        <style>
            :host {
              display: block;
            }
            form.botmanager-form {
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: flex-start;
                position: relative;
                background-color: ${bgClr};
                color: ${textClr};
                font-size: 100%;
                padding: 16px 32px;
                margin-bottom: 12px;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
                "Segoe UI Symbol";
                overflow: hidden;
            }
            button {
                display: inline-block;
                border: none;
                padding: 1rem 2rem;
                margin: 0;
                text-decoration: none;
                background: ${btnBgClr};
                color: ${btnTextClr};
                font-size: 100%;
                font-weight: bold;
                border-radius: 4px;
                cursor: pointer;
                text-align: center;
                transition: background 250ms ease-in-out, 
                            transform 150ms ease;
                -webkit-appearance: none;
                -moz-appearance: none;
                margin-top: 20px;
            }

            button:hover,
            button:focus {
                background: ${btnBgHoverClr};
                color: ${btnTextHoverClr};
            }

            button:focus {
                outline: 1px solid #fff;
                outline-offset: -4px;
            }

            button:active {
                transform: scale(0.99);
            }
            @media screen and (min-width: 768px) {
                button {
                    align-self: flex-end;
                }
            }
        </style>
        <form class="botmanager-form">
            <slot name="form-child"></slot>
            <button type="sumbit">${btnText}</button>
        </form>
    `;

  return {
    template,
    btnText,
    bgClr,
    textClr,
    credentials,
    method,
    contentType,
  };
};

export default createTemplate;
