const puppeteer = require("puppeteer");
const path = require("path");

(function(){
  puppeteer.launch().then((browser)=>{
    let _browser = browser;
    // console.log(browser);
    browser.newPage().then((page)=>{
      // console.log(page);
      page.goto("http://www.imooc.com").then((response)=>{
        page.screenshot({"path": path.resolve(__dirname, "./imooc.png")})
        .then(()=>{
          console.log("no error");
          _browser.close();
        }, ()=>{
          console.log("close error1");
        });
      }), ()=>{
        console.log("close error2");
      };
    }, ()=>{
      console.log("close error3");
    });
  }, ()=>{
    console.log("close error4");
  });

  // console.log(puppeteer.launch());

})();