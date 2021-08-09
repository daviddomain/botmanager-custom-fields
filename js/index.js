import BotManagerForm from "./components/form/bm-form.js";
import BotManagerFieldset from "./components/fieldset/bm-fieldset.js";
import BotManagerTooltip from "./components/tooltip/bm-tooltip.js";
import BotManagerInput from "./components/input/bm-input.js";
import BotManagerSelect from "./components/select/bm-select.js";
import BotManagerSwitch from "./components/switch/bm-switch.js";
import BotManagerTabs from "./components/tabs/bm-tabs.js";
import BotManagerGeneric from "./components/generic/bm-generic.js";

/*---------------------------------------------------------------
                    Globale Style Regeln
----------------------------------------------------------------*/
const globalStyleRules = {
  linkColor: "#82cfd0",
  linkColorHover: "#67a4a5",
  // Hue, Saturation and Luminance
  successAlertColor: `hsl(${120}deg, ${60}%, ${40}%)`,
  warningAlertColor: `hsl(${60}deg, ${100}%, ${40}%)`,
  errorAlertColor: `hsl(${0}deg, ${100}%, ${65}%)`,
};

/*---------------------------------------------------------------
                    Touch at your own risk :)
----------------------------------------------------------------*/
const minify = (strings, ...values) =>
  strings
    .map((string, index) => {
      return `${string.replace(/(\r\n|\n|\r)|/gm, "").replace(/\s\s+/g, " ")}${
        values[index] || ""
      }`;
    })
    .join("");

const globalStyles = minify`
    <style>
        html {
            box-sizing: border-box;
        }
        *, *:before, *:after {
            box-sizing: inherit;
        }
        .link-style,
        .link-style:visited {
            color: ${globalStyleRules.linkColor};
        }
        .link-style:active,
        .link-style:hover {
            color: ${globalStyleRules.linkColorHover};
        }
        .alert {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid transparent;
            border-radius: 6px;
            padding: 32px 32px;
            font-size: 80%;
            text-align: center;
            margin: 32px 0;
        }
        .alert:before {
            content: " ";
            display: inline-block;
            width: 40px;
            height: 40px;
            margin-right: 20px;
        }
        .alert-success {
            border-color: ${globalStyleRules.successAlertColor};
        }
        .alert-success::before {
            content: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='${globalStyleRules.successAlertColor}' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'%3E%3C/path%3E%3C/svg%3E");
        }
        .alert-warning {
            border-color: ${globalStyleRules.warningAlertColor};
        }
        .alert-warning::before {
            content: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='${globalStyleRules.warningAlertColor}' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'%3E%3C/path%3E%3C/svg%3E");
        }
        .alert-error {
            border-color: ${globalStyleRules.errorAlertColor};
        }
        .alert-error::before {
            content: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='${globalStyleRules.errorAlertColor}' d='M440.5 88.5l-52 52L415 167c9.4 9.4 9.4 24.6 0 33.9l-17.4 17.4c11.8 26.1 18.4 55.1 18.4 85.6 0 114.9-93.1 208-208 208S0 418.9 0 304 93.1 96 208 96c30.5 0 59.5 6.6 85.6 18.4L311 97c9.4-9.4 24.6-9.4 33.9 0l26.5 26.5 52-52 17.1 17zM500 60h-24c-6.6 0-12 5.4-12 12s5.4 12 12 12h24c6.6 0 12-5.4 12-12s-5.4-12-12-12zM440 0c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12s12-5.4 12-12V12c0-6.6-5.4-12-12-12zm33.9 55l17-17c4.7-4.7 4.7-12.3 0-17-4.7-4.7-12.3-4.7-17 0l-17 17c-4.7 4.7-4.7 12.3 0 17 4.8 4.7 12.4 4.7 17 0zm-67.8 0c4.7 4.7 12.3 4.7 17 0 4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0-4.7 4.7-4.7 12.3 0 17l17 17zm67.8 34c-4.7-4.7-12.3-4.7-17 0-4.7 4.7-4.7 12.3 0 17l17 17c4.7 4.7 12.3 4.7 17 0 4.7-4.7 4.7-12.3 0-17l-17-17zM112 272c0-35.3 28.7-64 64-64 8.8 0 16-7.2 16-16s-7.2-16-16-16c-52.9 0-96 43.1-96 96 0 8.8 7.2 16 16 16s16-7.2 16-16z'%3E%3C/path%3E%3C/svg%3E");
        }
        dl {
            display: flex;
            justify-content: space-between;
            font-size: 80%;
            margin: 9px 0;
        }
        dl > dd {
            margin: 0;
            font-weight: normal;
        }
        .success-text {
            color: ${globalStyleRules.successAlertColor}
        }
        .warn-text {
            color: ${globalStyleRules.warningAlertColor}
        }
        .error-text {
            color: ${globalStyleRules.errorAlertColor}
        }
        hr {
            margin: 0 0 32px;
        }
        .flex-space-between {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    </style>
    `;

document.addEventListener("DOMContentLoaded", () => {
  document.head.insertAdjacentHTML("beforeend", globalStyles);
});

window.customElements.define("botmanager-form", BotManagerForm);
window.customElements.define("botmanager-fieldset", BotManagerFieldset);
window.customElements.define("botmanager-tooltip", BotManagerTooltip);
window.customElements.define("botmanager-input", BotManagerInput);
window.customElements.define("botmanager-select", BotManagerSelect);
window.customElements.define("botmanager-switch", BotManagerSwitch);
window.customElements.define("botmanager-tabs", BotManagerTabs);
window.customElements.define("botmanager-generic", BotManagerGeneric);
