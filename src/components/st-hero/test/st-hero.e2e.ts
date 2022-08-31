import { newE2EPage } from '@stencil/core/testing';

describe('st-hero', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<st-hero></st-hero>');

    const element = await page.find('st-hero');
    expect(element).toHaveClass('hydrated');
  });
});
