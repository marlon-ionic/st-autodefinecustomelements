import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'st-comp',
  styleUrl: 'st-comp.css',
  shadow: true,
})
export class StComp {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
