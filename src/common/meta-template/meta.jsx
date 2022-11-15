import * as playwright from 'playwright-aws-lambda';

const width = 1200;
const height = 630;

const browser = await playwright.launchChromium({ headless: true });
const page = await browser.newPage({
  viewport: {
    width,
    height,
  },
});

const imageBuffer = await page.screenshot({
  type: 'jpeg',
  clip: {
    x: 0,
    y: 0,
    width,
    height,
  },
});

await browser.close();

export const OgImage = ({ title }) => {
    return <div style={{ color: 'red', fontSize: '60px' }}>{title}</div>;
  };