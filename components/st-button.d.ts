import type { Components, JSX } from "../dist/types/components";

interface StButton extends Components.StButton, HTMLElement {}
export const StButton: {
  prototype: StButton;
  new (): StButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
