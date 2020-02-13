import { newE2EPage } from '@stencil/core/testing';

describe('hue-motion-sensor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hue-motion-sensor></hue-motion-sensor>');

    const element = await page.find('hue-motion-sensor');
    expect(element).toHaveClass('hydrated');
  });
});
