import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const stHeroCss = ":host{display:block}";

const StHero$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return stHeroCss; }
}, [1, "st-hero"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["st-hero"];
  components.forEach(tagName => { switch (tagName) {
    case "st-hero":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, StHero$1);
      }
      break;
  } });
}
defineCustomElement$1();

const StHero = StHero$1;
const defineCustomElement = defineCustomElement$1;

export { StHero, defineCustomElement };
