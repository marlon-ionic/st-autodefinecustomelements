import type { Components, JSX } from "../dist/types/components";

interface StComp extends Components.StComp, HTMLElement {}
export const StComp: {
  prototype: StComp;
  new (): StComp;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
