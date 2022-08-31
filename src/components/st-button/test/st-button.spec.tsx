import { newSpecPage } from '@stencil/core/testing';
import { StButton } from '../st-button';

describe('st-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StButton],
      html: `<st-button></st-button>`,
    });
    expect(page.root).toEqualHtml(`
      <st-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </st-button>
    `);
  });
});
