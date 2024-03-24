const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  try {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(`#formBasicEmail`, { timeout, visible: true });

    await page.type(`#formBasicEmail`, "user@example.com");
    await page.type(`#formBasicPassword`, "passTest123@");
    await page.click(`button[type="submit"]`);

    await page.waitForSelector(`a[href="/share"]`, { timeout, visible: true });
    await page.click(`a[href="/share"]`);

    await page.waitForSelector(`#formBasicUrl`, { timeout, visible: true });
    await page.type(`#formBasicUrl`, "https://www.youtube.com/watch?v=_MAtA7m4zpo");
    await page.click(`button[type="submit"]`);

    await page.click(`a[href="/"]`);
    await page.waitForSelector(`video[src="https://www.youtube.com/watch?v=_MAtA7m4zpo"]`, { timeout, visible: true });

    console.log("Success!!!")
  } catch (err) {
    console.log(err);
  } finally {
    await browser.close();
  }
})();