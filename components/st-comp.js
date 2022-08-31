import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const stCompCss = ":host{display:block}";

const StComp$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return stCompCss; }
}, [1, "st-comp"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["st-comp"];
  components.forEach(tagName => { switch (tagName) {
    case "st-comp":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, StComp$1);
      }
      break;
  } });
}
defineCustomElement$1();

const StComp = StComp$1;
const defineCustomElement = defineCustomElement$1;

export { StComp, defineCustomElement };
