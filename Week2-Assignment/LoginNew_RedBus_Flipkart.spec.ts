import { chromium, test, webkit } from "@playwright/test";

test(`Login to RedBus and Flipkart`,async ()=> {

   const browser1 =  await chromium.launch({channel:"msedge", headless: false});
   const context1 = await browser1.newContext();
   const page1 = await  context1.newPage();

   //await page1.goto(`https://www.redbus.in/`); //Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.redbus.in/
   await page1.goto(`http://leaftaps.com/opentaps/control/main`);
   const url1 = page1.url();
   console.log(url1);

   const title1 = await page1.title();
   console.log(title1);

   const browser2 =  await webkit.launch({headless: false});
   const context2 = await browser2.newContext();
   const page2 = await  context2.newPage();

   await page2.goto(`https://www.flipkart.com`);
   const url2 = page2.url();
   console.log(url2);

   const title2 = await page2.title();
   console.log(title2);
})