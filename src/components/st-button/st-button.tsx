import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'st-button',
  styleUrl: 'st-button.scss',
  shadow: true,
})
export class StButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
