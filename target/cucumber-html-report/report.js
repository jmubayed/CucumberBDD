$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/SearchCars.feature");
formatter.feature({
  "name": "Acceptance testing to validate Search cars page is working fine.",
  "description": "  In order to validate that \n  the search car page is working fine\n  we will do the acceptance testing",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Search-Cars"
    }
  ]
});
formatter.scenario({
  "name": "Validate search cars page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Search-Cars"
    },
    {
      "name": "@Search-Cars-Positive"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I on the Home page \"https://www.carsguide.com.au\" of CarsGuide website",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchCarsSteps.i_on_the_Home_page_of_CarsGuide_website(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I move to Car for Sale menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ]
    },
    {
      "cells": [
        "buy + sale"
      ]
    },
    {
      "cells": [
        "Sell My Car"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_Car_for_Sale_menu(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on \"Search Cars\" link",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCarsSteps.click_on_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select carbrand as \"BMW\" from AnyMake DropDown",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCarsSteps.select_carbrand_as_from_AnyMake_DropDown(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//select[@id\u003d\u0027makes\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-4OFRI5EK\u0027, ip: \u0027192.168.0.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\jmubayed\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53601}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: bda6e612c965daf03f62a2ad3b439eac\n*** Element info: {Using\u003dxpath, value\u003d//select[@id\u003d\u0027makes\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy37.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.qa.pages.actions.CarsSearchPageActions.selectCarMake(CarsSearchPageActions.java:23)\r\n\tat com.qa.steps.SearchCarsSteps.select_carbrand_as_from_AnyMake_DropDown(SearchCarsSteps.java:50)\r\n\tat ✽.select carbrand as \"BMW\" from AnyMake DropDown(file:src/test/resources/features/SearchCars.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "select carmodel as \"1 Series\" from SelectModel dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCarsSteps.select_carmodel_as_from_SelectModel_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select location as \"NSW - Hunter\" from Any SelecLocation dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCarsSteps.select_location_as_from_Any_SelecLocation_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select price as \"$1,000\" from price dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCarsSteps.select_price_as_from_price_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Find_My_Next_Car button",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCarsSteps.click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see list of searched cars",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarsSteps.i_should_see_list_of_searched_cars()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the page title should be \"Bmw 1 Series Under 1000 for Sale Hunter NSW | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/UsedCarSearch.feature");
formatter.feature({
  "name": "Acceptance testing to validate Used Search cars page is working fine.",
  "description": "  In order to validate that \n  the Used search car page is working fine\n  we will do the acceptance testing",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Used-Search-Cars"
    }
  ]
});
formatter.scenario({
  "name": "Validate used search cars page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Used-Search-Cars"
    },
    {
      "name": "@Used-Search-Cars-Positive"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I on the Home page \"https://www.carsguide.com.au\" of CarsGuide website",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchCarsSteps.i_on_the_Home_page_of_CarsGuide_website(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I move to Car for Sale menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ]
    },
    {
      "cells": [
        "buy + sale"
      ]
    },
    {
      "cells": [
        "Sell My Car"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_Car_for_Sale_menu(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on \"Used\" link on Used Search Car page",
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsSteps.click_on_link_on_Used_Car_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select carbrand as \"Audi\" from AnyMake DropDown on Used Search Car page",
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsSteps.select_carbrand_as_from_AnyMake_DropDown_on_Used_Search_Car_page(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//select[@id\u003d\u0027makes\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-4OFRI5EK\u0027, ip: \u0027192.168.0.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\jmubayed\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53706}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 73a8062f042570bb734c24394beea1c2\n*** Element info: {Using\u003dxpath, value\u003d//select[@id\u003d\u0027makes\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy37.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.qa.pages.actions.UsedCarsSearchPageActions.selectCarMake(UsedCarsSearchPageActions.java:22)\r\n\tat com.qa.steps.UsedCarsSteps.select_carbrand_as_from_AnyMake_DropDown_on_Used_Search_Car_page(UsedCarsSteps.java:25)\r\n\tat ✽.select carbrand as \"Audi\" from AnyMake DropDown on Used Search Car page(file:src/test/resources/features/UsedCarSearch.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "select car model on Used Search Car page",
  "rows": [
    {
      "cells": [
        "carModel"
      ]
    },
    {
      "cells": [
        "A4"
      ]
    },
    {
      "cells": [
        "A3"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsSteps.select_car_model_on_Used_Search_Car_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select location as \"ACT - All\" from Any SelecLocation dropdown on Used Search Car page",
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsSteps.select_location_as_from_Any_SelecLocation_dropdown_on_Used_Search_Car_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select price as \"$2,000\" from price dropdown on Used Search Car page",
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsSteps.select_price_as_from_price_dropdown_on_Used_Search_Car_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Find_My_Next_Car button on Used Search Car page",
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsSteps.click_on_Find_My_Next_Car_button_on_Used_Search_Car_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see list of searched cars on Used Search Car page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsedCarsSteps.i_should_see_list_of_searched_cars_on_Used_Search_Car_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the page title should be \"Used Audi A4 Under 2000 for Sale ACT | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
});