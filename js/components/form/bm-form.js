import errorHanlder from "./error-handler.js";
import createTemplate from "./template.js";

export default class BotManagerForm extends HTMLElement {
  constructor() {
    super();
    const attributes = this.attributes;
    errorHanlder(attributes);
    const templateAndProps = createTemplate(attributes);
    this.action = attributes.action.value;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      templateAndProps.template.content.cloneNode(true)
    );

    this.credentials = templateAndProps.credentials;
    this.btnText = templateAndProps.btnText;
    this.bgClr = templateAndProps.bgClr;
    this.textClr = templateAndProps.textClr;
    this.callback = (data) => console.log(data);
    this.form = this.shadowRoot.querySelector("form");
    this.form.addEventListener("submit", this._onFormSubmit);
  }

  showResponse(responseData, timeout) {
    const response = document.createElement("div");
    response.innerHTML =
      typeof responseData !== "string"
        ? JSON.stringify(responseData, null, 2)
        : responseData;
    response.style.position = "fixed";
    response.style.width = "300px";
    response.style.minHeight = "200px";
    response.style.top = "calc(50% - 100px)";
    response.style.left = "calc(50% - 150px)";
    response.style.fontFamily = "sans-serif";
    response.style.background = this.bgClr;
    response.style.color = this.textClr;
    response.style.zIndex = "9999";
    response.style.textAlign = "left";
    response.style.padding = "1.2rem 2rem";
    this.style.filter = "blur(2px)";
    document.body.prepend(response);
    setTimeout(() => {
      response.remove();
      this.style.filter = "initial";
    }, timeout);
  }

  _showLoader() {
    this.form.querySelector("button").textContent = "Loading...";
  }

  response(callback) {
    this.callback = callback;
  }

  _letsFetch(fieldsets) {
    let formData = new FormData();
    fieldsets
      .map((fieldset) => Array.from(fieldset.children))
      .flatMap((child) => child)
      .filter((input) => input.disabled === null)
      .map((input) => input.serializedData())
      .forEach((input) => formData.append(input.name, input.value));

    fetch(this.action, {
      body: formData,
      method: "POST",
      credentials: this.credentials,
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            this.callback.call(this, Promise.reject(err));
          });
        }
        return res.json();
      })
      .then((json) => {
        this.form.querySelector("button").textContent = this.btnText;
        this.callback.call(this, json);
      })
      .catch((err) => {
        this.form.querySelector("button").textContent = this.btnText;
        this.callback.call(this, err);
      });
  }

  _onFormSubmit = (evt) => {
    evt.preventDefault();
    const elems = this.form.querySelector("slot").assignedNodes();
    this._showLoader();
    this._letsFetch(elems);
  };

  connectedCallback() {}

  disconnectedCallback() {
    this.form.removeEventListener("submit", this._onFormSubmit);
  }
}
