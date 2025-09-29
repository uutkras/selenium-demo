const { Builder, By, Key, Browser } = require("selenium-webdriver");


async function runTest() {
  // Use Firefox browser via the Browser enum
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();

  try {
    console.log("Starting menu navigation test on Firefox...");
    

    await driver.get("https://www.pfizer.com");
    console.log("Navigated to Pfizer website.");


    await driver.findElement(By.className("hamburger button hide-element-text")).click()
    console.log("Hamburger menu clicked successfully.");
    await driver.sleep(3000)

    const scienceSubmenuToggle = By.xpath("//button[@aria-label='Science toggle button']");

    await driver.findElement(scienceSubmenuToggle).click()
    console.log("Science submenu expander clicked to OPEN.");
    await driver.sleep(5000)

    await driver.findElement(scienceSubmenuToggle).click()
    console.log("Science submenu expander clicked again to CLOSE.");
    await driver.sleep(2000)
    
  } catch (error) {
    console.error("An error occurred during the test:", error);
  } finally {

    if (driver) {
        await driver.quit();
        console.log("Firefox browser closed.");
    }
  }
}

runTest();