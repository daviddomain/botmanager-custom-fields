import createTemplate from "./template.js";

export default class BotManagerTabs extends HTMLElement {
  constructor() {
    super();
    const attributes = this.attributes;
    const templateAndProps = createTemplate(attributes);
    this.span = templateAndProps.span;
    this.tabs = templateAndProps.tabs;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      templateAndProps.template.content.cloneNode(true)
    );
    this.tabset = this.shadowRoot.querySelector(".nav-tabs");
    this.tabset.addEventListener("click", this._onTabClick);
  }

  getParentFieldset() {
    let parent = this.shadowRoot.host;
    while (parent.tagName !== "BOTMANAGER-FIELDSET") {
      parent = parent.parentElement;
    }
    return parent;
  }

  _onTabClick = (evt) => {
    const tabContentElements = this.shadowRoot
      .querySelector("slot")
      .assignedElements();
    const children = evt.currentTarget.children;
    const len = children.length;
    const target = evt.target;
    if (target.tagName === "LI") {
      for (let i = 0; i < len; i++) {
        children[i].classList.remove("active");
        tabContentElements[i].classList.remove("show");
      }

      target.classList.add("active");
      const content2Show = tabContentElements.filter(
        (elm) => elm.dataset.tab === evt.target.textContent
      );
      if (content2Show.length) content2Show[0].classList.add("show");
    }
  };

  connectedCallback() {
    this.style.gridColumn = this.span;
    console.log(this.tabs);
    console.log(this.tabset);
  }

  disconnectedCallback() {
    this.tabset.removeEventListener("click", this._onTabClick);
  }
}
