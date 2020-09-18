package com.qa.steps;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.qa.utils.SeleniumDriver;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;

public class AfterActions {

	@After
	public static void tearDown(Scenario scenario) {
		
		WebDriver driver=SeleniumDriver.getDriver();
		System.out.println(scenario.isFailed());
		if(scenario.isFailed()) {
			byte[] screenshotBytes=((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshotBytes, "image/png");
		}
		
		SeleniumDriver.tearDown();
	}
	
}
