package com.task.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features={"/Users/HOME/Desktop/Task/CucumberPOMTask/src/main/java/com/task/feature/Task.feature"},//path to feature file
		glue= {"com/task/stepdefinitions"},//path to step definition file
		format= {"pretty","html:test-outout","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
		monochrome=true,
		strict=true,//will check if any step is not defined in step definition file		
		dryRun=false//to check mapping is proper betweeen feature file and step definition file
		)
public class TestRunner {

}
