const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://dou.ua/
  await page.goto('https://dou.ua/');
  // Click text=Зарплаты
  await page.click('text=Зарплаты');
  // assert.equal(page.url(), 'https://jobs.dou.ua/salaries/');
  // Click text=Работа
  await page.click('text=Работа');
  // assert.equal(page.url(), 'https://jobs.dou.ua/');
  // Click [placeholder="Должность, язык, компания, город, страна. Например, Node.js relocation"]
  await page.click('[placeholder="Должность, язык, компания, город, страна. Например, Node.js relocation"]');
  // Fill [placeholder="Должность, язык, компания, город, страна. Например, Node.js relocation"]
  await page.fill('[placeholder="Должность, язык, компания, город, страна. Например, Node.js relocation"]', 'qa');
  // Click text=Найти
  await page.click('text=Найти');
  // assert.equal(page.url(), 'https://jobs.dou.ua/vacancies/?search=qa');
  // ---------------------
  await context.close();
  await browser.close();
})();