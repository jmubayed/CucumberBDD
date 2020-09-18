package com.qa.pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.qa.pages.locators.CarsSeachPageLocators;
import com.qa.utils.SeleniumDriver;


public class CarsSearchPageActions {

	CarsSeachPageLocators carsSeachPageLocators = null;

	public CarsSearchPageActions() {

		this.carsSeachPageLocators = new CarsSeachPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), carsSeachPageLocators);

	}

	public void selectCarMake(String carBrand) {

		Select selectCarMaker = new Select(carsSeachPageLocators.carMakeDropDown);
		selectCarMaker.selectByVisibleText(carBrand);
	}

	public void selectCarModel(String carModel) {

		Select selectCarMaker = new Select(carsSeachPageLocators.selectModelDropDown);
		selectCarMaker.selectByVisibleText(carModel);
	}

	public void selectLocation(String location) {

		Select selectCarMaker = new Select(carsSeachPageLocators.selectLocationDropDown);
		selectCarMaker.selectByVisibleText(location);
	}

	public void selectCarPrice(String carPrice) {

		Select selectCarMaker = new Select(carsSeachPageLocators.priceDropDown);
		selectCarMaker.selectByVisibleText(carPrice);
	}

	public void clickOnFindMyNextCarButton() {

		carsSeachPageLocators.findMyNextCarBtn.click();
	}

}
