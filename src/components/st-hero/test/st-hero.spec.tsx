import { newSpecPage } from '@stencil/core/testing';
import { StHero } from '../st-hero';

describe('st-hero', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StHero],
      html: `<st-hero></st-hero>`,
    });
    expect(page.root).toEqualHtml(`
      <st-hero>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </st-hero>
    `);
  });
});
