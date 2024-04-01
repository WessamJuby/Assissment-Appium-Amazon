//this locators and methods can be spread to multiple files or classes.

import { $, $$, driver } from "@wdio/globals";

class POM {
  get burgerButton() {
    return $("accessibility id:Browse menu Tab 4 of 4" /* Burger button on the navigation bar */);
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  get showResultsButton() {
    return $$("class name:android.view.View")[30];
  }

  get profileSettingButton() {
    return $$("id:com.amazon.mShop.android.shopping:id/bottom_tab_button_icon")[1];
  }

  get languageButton() {
    return $("accessibility id:anx_me_country_and_language");
  }

  get currencyButton() {
    return $('xpath://android.widget.Button[@text="Currency: $ - USD - US Dollar"]');
  }

  async skipLogIn() {
    await $('xpath://android.widget.TextView[@text="Done"]').click();
    await $('//*[@resource-id="com.amazon.mShop.android.shopping:id/skip_sign_in_button"]').click();
  }

  async chooseDepartment(departmentName) {
    await $('xpath://android.widget.TextView[@text="Shop by Department"]').click();
    await $(`xpath://android.widget.TextView[@text="${departmentName}"]`).click();
  }

  async searchForText(searchText) {
    await $("id:com.amazon.mShop.android.shopping:id/chrome_search_hint_view").click();
    await $("id:com.amazon.mShop.android.shopping:id/rs_search_src_text").addValue(searchText);
    await driver.executeScript("mobile: pressKey", [{ keycode: 66 }]);
  }
  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  async ScrollElementIntoView(locator) {
    try {
      await $("android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward(55)");
      if (await $(locator).isDisplayed()) return;
      else throw new Error("element not displayed");
    } catch {
      await this.ScrollElementIntoView(locator);
    }
  }
}

export default new POM();
