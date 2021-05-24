package com.task.setup;

import java.io.FileInputStream;


import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {
	public  static WebDriver driver;
	public static Properties properties;
	
	public 	TestBase()
	{
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
	
	public static void initialize()
	{
		String browser=properties.getProperty("browser");
		
		switch(browser)
		{
		    case "firefox":
			    System.setProperty("webdriver.gecko.driver", "C:\\Selenium jar\\WebDriver\\geckodriver.exe");
			    driver=new ChromeDriver();
			    break;
		    case "ie":
			    System.setProperty("webdriver.ie.driver", "C:\\Selenium jar\\WebDriver\\chromedriver.exe");
			    driver=new ChromeDriver();
			    break;
		    default:
			    System.setProperty("webdriver.chrome.driver", "C:\\Selenium jar\\WebDriver\\chromedriver.exe");
			    driver=new ChromeDriver();
			    break;
		}
		
		driver.manage().window().maximize();
		driver.get(properties.getProperty("url"));
		
	}

	public WebDriver getDriver()
	{
		return driver;
	}
	public void tearDown()
	{
		driver.quit();
	}
}
