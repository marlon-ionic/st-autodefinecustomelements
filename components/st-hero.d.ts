import type { Components, JSX } from "../dist/types/components";

interface StHero extends Components.StHero, HTMLElement {}
export const StHero: {
  prototype: StHero;
  new (): StHero;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
