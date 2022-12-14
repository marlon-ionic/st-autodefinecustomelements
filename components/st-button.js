import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const stButtonCss = ":host{align-items:center;background-color:darkblue;border-radius:4px;color:white;display:flex;flex:0 0 auto;font-family:Arial, Helvetica, sans-serif;font-weight:lighter;justify-content:center;line-height:normal;padding:0.25rem;text-align:center}";

const StButton$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return stButtonCss; }
}, [1, "st-button"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["st-button"];
  components.forEach(tagName => { switch (tagName) {
    case "st-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, StButton$1);
      }
      break;
  } });
}
defineCustomElement$1();

const StButton = StButton$1;
const defineCustomElement = defineCustomElement$1;

export { StButton, defineCustomElement };
