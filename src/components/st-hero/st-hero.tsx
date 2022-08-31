import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'st-hero',
  styleUrl: 'st-hero.css',
  shadow: true,
})
export class StHero {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
