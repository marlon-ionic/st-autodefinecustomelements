import { newSpecPage } from '@stencil/core/testing';
import { StComp } from '../st-comp';

describe('st-comp', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StComp],
      html: `<st-comp></st-comp>`,
    });
    expect(page.root).toEqualHtml(`
      <st-comp>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </st-comp>
    `);
  });
});
