package com.task.stepdefinitions;

import com.task.pages.AddValues;

import com.task.setup.TestBase;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TaskStepDefinition {

	TestBase tb = new TestBase();
	AddValues av = new AddValues(tb.getDriver());

	SoftAssert softAssertion = new SoftAssert();
	
	  @Before 
	  public void beforeTag() 
	  {
		  TestBase.initialize();
	  }
	 

	@Given("^User is on add values page$")
	public void user_is_on_add_values_page() throws Throwable {
		String url=tb.getDriver().getCurrentUrl();
		softAssertion.assertEquals(url,"");
	}

	@When("^user enters \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" , \"([^\"]*)\"$")
	public void user_enters(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
		av.initializeValues(arg1, arg2, arg3, arg4, arg5);
	}

	@Then("^check user enters right count of values$")
	public void check_user_enters_right_count_of_values() throws Throwable {
		boolean rcov = av.checkCountOfNumDisplayed();
		softAssertion.assertEquals(rcov, true);
		if (rcov == true)
			System.out.println("right count of values are displayed");
		else
			System.out.println("right count of values are not displayed");
	}

	@Then("^check entered values are geater than zero$")
	public void check_entered_values_are_geater_than_zero() throws Throwable {
		boolean vgto = av.checkValGreaterThanZero();
		softAssertion.assertEquals(vgto, true);
		if (vgto == true)
			System.out.println("values greater than 0");
		else
			System.out.println("values are not greater than 0");

	}

	@Then("^check total balance is euqal to sum of all values$")
	public void check_total_balance_is_euqal_to_sum_of_all_values() throws Throwable {
		String totalBalance = av.getTotalBalance();
		String actualSum = av.getSumOfValuesDisplayed();
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
		softAssertion.assertEquals(currencies, "values are formated as currencies");
		System.out.println(currencies);

	}

	
	 @After 
	 public void afterTag() 
	 {
		 tb.tearDown(); 
     }
	 

}
