package com.task.stepdefinitions;

import com.task.pages.AddValues;


import com.task.setup.TestBase;

import java.util.concurrent.TimeUnit;

import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TaskStepDefinition {

	TestBase tb = new TestBase();
	AddValues av;

	SoftAssert softAssertion = new SoftAssert();
	
	//initialize WebDiver and initializing AddValues class 
	  @Before 
	  public void beforeTag() 
	  {
		  TestBase.initialize();
		  av=new AddValues(TestBase.getDriver());
		  TestBase.getDriver().manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		  
	  }
	 

	@Given("^User is on add values page$")
	public void user_is_on_add_values_page() throws Throwable {
		
		//validating the url
		
		String url=tb.getDriver().getCurrentUrl();
		softAssertion.assertEquals(url,"");
	}

	@When("^user enters \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" , \"([^\"]*)\"$")
	public void user_enters(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
		
		//initialize textbox values
		
		av.initializeValues(arg1, arg2, arg3, arg4, arg5);
	}

	@Then("^check user enters right count of values$")
	public void check_user_enters_right_count_of_values() throws Throwable {
		
		//validating user enters values in all feilds
		boolean rcov = av.checkCountOfNumDisplayed();
		softAssertion.assertEquals(rcov, true);
		
		if (rcov == true)
			System.out.println("right count of values are displayed");
		else
			System.out.println("right count of values are not displayed");
	}

	@Then("^check entered values are geater than zero$")
	public void check_entered_values_are_geater_than_zero() throws Throwable {
		
		//validating all values are greater than zero
		boolean vgto = av.checkValGreaterThanZero();
		softAssertion.assertEquals(vgto, true);
		if (vgto == true)
			System.out.println("values greater than 0");
		else
			System.out.println("values are not greater than 0");

	}

	@Then("^check total balance is equal to sum of all values$")
	public void check_total_balance_is_equal_to_sum_of_all_values() throws Throwable {
		
		String totalBalance = av.getTotalBalance();
		String actualSum = av.getSumOfValuesDisplayed();
		
		//validating sum of values is equal to balance
		
		if (av.validateCurrencies().equals("values are formated as currencies")) {

			softAssertion.assertEquals(actualSum, totalBalance);
			if (actualSum == totalBalance)
				System.out.print("incorrect balance value displayed");
			else
				System.out.print("correct balance value displayed");
		}

	}

	@Then("^check values are formated as currencies$")
	public void check_values_are_formated_as_currencies() throws Throwable {
		
		String currencies = av.validateCurrencies();
		
		//validating values are preceded by '$'
		
		softAssertion.assertEquals(currencies, "values are formated as currencies");
		System.out.println(currencies);

	}

	
	 @After 
	 public void afterTag() 
	 {
		 tb.tearDown(); 
     }
	 

}
