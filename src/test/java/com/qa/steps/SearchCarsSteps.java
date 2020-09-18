package com.qa.steps;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.Assert;

import com.qa.pages.actions.CarsGuideHomePageActions;
import com.qa.pages.actions.CarsSearchPageActions;
import com.qa.utils.SeleniumDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SearchCarsSteps {

	private static Logger Log = LogManager.getLogger(SeleniumDriver.class.getName());
	CarsGuideHomePageActions carsGuideHomePageActions=new CarsGuideHomePageActions();
	CarsSearchPageActions carsSearchPageActions =new CarsSearchPageActions();
	
	@Given("I on the Home page {string} of CarsGuide website")
	public void i_on_the_Home_page_of_CarsGuide_website(String websiteURL) {
	   
		SeleniumDriver.openPage(websiteURL);
	}

	@When("I move to Car for Sale menu")
	public void i_move_to_Car_for_Sale_menu(List<String> list) {
	    
		String menu=list.get(1);
		carsGuideHomePageActions.moveToCarsForSaleMenu();
		Log.info("selected good");
		
		
	}

	@And("click on {string} link")
	public void click_on_link(String searchCars) {
	    
		carsGuideHomePageActions.clickOnSearchCarsMenu();
		
	}

	@And("select carbrand as {string} from AnyMake DropDown")
	public void select_carbrand_as_from_AnyMake_DropDown(String carBrand) {
	
		carsSearchPageActions.selectCarMake(carBrand);
		
	}

	@And("select carmodel as {string} from SelectModel dropdown")
	public void select_carmodel_as_from_SelectModel_dropdown(String carModel) {
	    
		carsSearchPageActions.selectCarModel(carModel);
	}

	@And("select location as {string} from Any SelecLocation dropdown")
	public void select_location_as_from_Any_SelecLocation_dropdown(String location) {
	    
		carsSearchPageActions.selectLocation(location);
	}

	@And("select price as {string} from price dropdown")
	public void select_price_as_from_price_dropdown(String carPrice) {
	   
		carsSearchPageActions.selectCarPrice(carPrice);
	}

	@And("click on Find_My_Next_Car button")
	public void click_on_Find_My_Next_Car_button() {
	    
		carsSearchPageActions.clickOnFindMyNextCarButton();
	}

	@Then("I should see list of searched cars")
	public void i_should_see_list_of_searched_cars() {
	    
		System.out.println("Car list found");
	}

	@And("the page title should be {string}")
	public void the_page_title_should_be(String expectedTitle) {
		
		String actual_title=SeleniumDriver.getDriver().getTitle();
	    Assert.assertEquals(actual_title, expectedTitle);
	}
}
