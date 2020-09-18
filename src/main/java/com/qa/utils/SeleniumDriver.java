package com.qa.utils;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

public class SeleniumDriver {

	private static SeleniumDriver seleniumDriver;

	// init webDriver
	private static WebDriver driver;

	private static WebDriverWait waitDriver;

	public final static int TIMEOUT = 30;
	public final static int PAGE_LOAD_TIMEOUT = 50;

	private SeleniumDriver() {

		//System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"\\src\\test\\resources\\executables\\chromedriver.exe");
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();

		waitDriver = new WebDriverWait(driver, TIMEOUT);
		driver.manage().timeouts().pageLoadTimeout(PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);

	}

	public static void openPage(String url) {

		driver.get(url);
	}

	public static WebDriver getDriver() {

		return driver;
	}

	public static void setUpDriver() {

	   if(seleniumDriver==null) {
		
		   seleniumDriver=new SeleniumDriver();
		   
	   }
	}

   public static void tearDown() {
	   
	   if(driver!=null) {
		   driver.close();
		   driver.quit();
	   }
	   
	   seleniumDriver=null;
   }

}



