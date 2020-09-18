package com.qa.pages.actions;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import com.qa.pages.locators.CarsGuideHomePageLocators;
import com.qa.utils.SeleniumDriver;

public class CarsGuideHomePageActions {

	CarsGuideHomePageLocators carsGuideHomePageLocators = null;
	

	public CarsGuideHomePageActions() {

		this.carsGuideHomePageLocators = new CarsGuideHomePageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), carsGuideHomePageLocators);

	}

	public void moveToCarsForSaleMenu() {

		Actions action = new Actions(SeleniumDriver.getDriver());
		action.moveToElement(carsGuideHomePageLocators.carsForSaleLink).perform();
	}

	public void clickOnSearchCarsMenu() {

		carsGuideHomePageLocators.searchCarsLink.click();
	}

	public void clickOnUsedMenu() {

		carsGuideHomePageLocators.usedLink.click();
	}

	public void moveToSellMyCarMenu() {
		
		Actions action = new Actions(SeleniumDriver.getDriver());
		action.moveToElement(carsGuideHomePageLocators.sellMyCarLink).perform();
	   
	
	
	}
}
