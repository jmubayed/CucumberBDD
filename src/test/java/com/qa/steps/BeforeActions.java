package com.qa.steps;

import com.qa.utils.SeleniumDriver;

import io.cucumber.java.Before;


public class BeforeActions {

	@Before
	public static void setUp() {
		
		SeleniumDriver.setUpDriver();
	}
	
}
