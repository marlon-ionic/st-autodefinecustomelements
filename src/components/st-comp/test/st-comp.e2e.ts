import { newE2EPage } from '@stencil/core/testing';

describe('st-comp', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<st-comp></st-comp>');

    const element = await page.find('st-comp');
    expect(element).toHaveClass('hydrated');
  });
});
