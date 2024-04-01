import { expect } from "@wdio/globals";
import POM from "../pageobjects/POM.page.js";

describe("Acceptance Criteria Cases", () => {
  beforeEach(async () => {
    await driver.reloadSession();
    await POM.skipLogIn();
  });
  it("Scenario 3: [Check the selected currency displayed for the products' price]", async () => {
    await POM.profileSettingButton.click();
    await POM.languageButton.click();
    await POM.currencyButton.click();
    await POM.ScrollElementIntoView(
      'xpath://android.widget.RadioButton[@text="AED - United Arab Emirates Dirham"]'
    );
    await driver
      .$('xpath://android.widget.RadioButton[@text="AED - United Arab Emirates Dirham"]')
      .click();
    await $('xpath://android.widget.TextView[@text="Done"]').click();
    await driver.$('xpath:(//android.widget.TextView[@text="  "])[2]').click();
    let firstProduct = await $(
      '//android.webkit.WebView[@text="Amazon.com : solid state drives"]/android.view.View/android.view.View/android.view.View[3]/android.view.View'
    )
      .$$("class name:android.widget.TextView")[8]
      .getText();
    expect(firstProduct.startsWith("AED")).toEqual(true);
  });
  it("Scenario 2: [Check filter by department in Deals and Promotions page]", async () => {
    await POM.burgerButton.click();
    await POM.chooseDepartment("Software");
    let title = await driver.$('xpath://android.webkit.WebView[@text="Amazon.com: : Software"]');
    expect(title).toExist();
  });
  it("Scenario 1: [Check the total displayed number of results for category Smart Home | Televisions]", async () => {
    await POM.burgerButton.click();
    await POM.chooseDepartment("Electronics");
    await POM.sleep(5000);
    await POM.searchForText("TV & Video");
    await $("accessibility id:× International Shipping Electronics").click();
    await $('xpath://android.widget.ToggleButton[@text="Filters"]').click();
    await $('xpath:(//android.widget.TextView[@text="Electronics"])[1]').click();
    await POM.ScrollElementIntoView("accessibility id:Televisions & Video Products");
    await $("accessibility id:Televisions & Video Products").click();
    await POM.ScrollElementIntoView("accessibility id:Smart TV");
    await $("accessibility id:Smart TV").click();
    await POM.showResultsButton.click();
  });
});
