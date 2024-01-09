const puppetter = require('puppeteer');

(async () => {
  console.log('DEBUG');
  //const browser = await puppetter.launch();
  console.log('abrir navegador');
  const browser = await puppetter.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/Node.js');

  var titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    console.log(h1.innerHTML);
    return h1.innerHTML;
  });
  //browser.close();
  console.log('cerrar navegador');
})();