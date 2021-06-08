package com.task.setup;

import java.io.FileInputStream;


import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {
	public static  WebDriver driver;
	
	//creating the instance of Properties  to fetch values of Properties file
	public static Properties properties;
	
	
	public 	TestBase()
	{
		/*
		 Setting the path for input stream
		 using catch block to handle exception if file not found
		 */

		try
		{
			properties=new Properties();
			FileInputStream inStream=new FileInputStream("C:\\Users\\HOME\\Desktop\\Task\\CucumberPOMTask\\src\\main\\java\\com\\task\\config\\config.properties");
			properties.load(inStream);
		}
		catch(IOException e)
		{
			e.getMessage();
		}
	}
	
	//to initialize WebDriver instance
	
	public static void initialize()
	{
		//retrieving browser value from properties file
		String browser=properties.getProperty("browser");
		
		switch(browser)
		{
		    case "firefox":
		    	/*
		    	 setting path to Firefox driver 
		    	 */
			    System.setProperty("webdriver.gecko.driver", "C:\\Selenium jar\\WebDriver\\geckodriver.exe");
			    driver=new FirefoxDriver();
			    break;
		    case "ie":
		    	/*
		    	 setting path to ie driver
		    	 */
			    System.setProperty("webdriver.ie.driver", "C:\\Selenium jar\\WebDriver\\IEDriverServer.exe");
			    driver=new InternetExplorerDriver();
			    break;
		    default:
		    	/*
		    	 setting path to chrome driver
		    	 */
			    System.setProperty("webdriver.chrome.driver", "C:\\Selenium jar\\WebDriver\\chromedriver.exe");
			    driver=new ChromeDriver();
			    break;
		}
		
		driver.manage().window().maximize();
		driver.get(properties.getProperty("url"));
		
	}
     
	public static WebDriver getDriver()
	{
		return driver;
	}
	public void tearDown()
	{
		driver.quit();
	}
}
