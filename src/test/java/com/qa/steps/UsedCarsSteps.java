package com.qa.steps;

import java.util.List;

import com.qa.pages.actions.CarsGuideHomePageActions;
import com.qa.pages.actions.UsedCarsSearchPageActions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;

public class UsedCarsSteps {

	CarsGuideHomePageActions carsGuideHomePageActions=new CarsGuideHomePageActions();
	UsedCarsSearchPageActions usedCarsSearchPageActions=new UsedCarsSearchPageActions();
	
	@And("click on {string} link on Used Search Car page")
	public void click_on_link_on_Used_Car_page(String string) {

		carsGuideHomePageActions.clickOnUsedMenu();
	}

	@And("select carbrand as {string} from AnyMake DropDown on Used Search Car page")
	public void select_carbrand_as_from_AnyMake_DropDown_on_Used_Search_Car_page(String carBrand) {

		usedCarsSearchPageActions.selectCarMake(carBrand);
	}

	@And("select car model on Used Search Car page")
	public void select_car_model_on_Used_Search_Car_page(List<String> list) {

		String menu = list.get(1);
		usedCarsSearchPageActions.selectCarModel(menu);
		
	}

	@And("select location as {string} from Any SelecLocation dropdown on Used Search Car page")
	public void select_location_as_from_Any_SelecLocation_dropdown_on_Used_Search_Car_page(String location) {

		usedCarsSearchPageActions.selectLocation(location);
	}

	@And("select price as {string} from price dropdown on Used Search Car page")
	public void select_price_as_from_price_dropdown_on_Used_Search_Car_page(String carPrice) {

		usedCarsSearchPageActions.selectCarPrice(carPrice);
	}

	@And("click on Find_My_Next_Car button on Used Search Car page")
	public void click_on_Find_My_Next_Car_button_on_Used_Search_Car_page() {

		usedCarsSearchPageActions.clickOnFindMyNextCarButton();		
	}

	@Then("I should see list of searched cars on Used Search Car page")
	public void i_should_see_list_of_searched_cars_on_Used_Search_Car_page() {

		System.out.println("Used car list populated");
	}

}
