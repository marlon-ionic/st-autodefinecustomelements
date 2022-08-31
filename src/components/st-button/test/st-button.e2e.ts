import { newE2EPage } from '@stencil/core/testing';

describe('st-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<st-button></st-button>');

    const element = await page.find('st-button');
    expect(element).toHaveClass('hydrated');
  });
});
