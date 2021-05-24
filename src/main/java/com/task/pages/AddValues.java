package com.task.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.task.setup.TestBase;

public class AddValues {
	
	WebDriver driver;
	 
	@FindBy(id="txt_val_1")
	WebElement value1;
	
	@FindBy(id="txt_val_2")
	WebElement value2;
	
	@FindBy(id="txt_val_3")
	WebElement value3;

	@FindBy(id="txt_val_4")
	WebElement value4;
	
	@FindBy(id="txt_val_5")
	WebElement value5;
	
	@FindBy(id="txt_ttl_5")
	WebElement totalBalance;
	
	public AddValues(WebDriver driver1)
	{
		PageFactory.initElements(driver1, this);
		driver=driver1;
	}
	
	public void initializeValues(String val1,String val2,String val3,String val4,String val5)
	   {
		   value1.sendKeys(val1);
		   value2.sendKeys(val2);
		   value3.sendKeys(val3);
		   value4.sendKeys(val4);
		   value5.sendKeys(val5);
		   
	   }
	
	public String getSumOfValuesDisplayed()
	   {
		   Float val1=Float.valueOf(value1.getText().substring(1));
		   Float val2=Float.valueOf(value2.getText().substring(1));
		   Float val3=Float.valueOf(value3.getText().substring(1));
		   Float val4=Float.valueOf(value4.getText().substring(1));
		   Float val5=Float.valueOf(value5.getText().substring(1));
		   
		   Float res=val1+val2+val3+val4+val5;
		   
		   return "$"+res;
	   }
	   
	 public String getTotalBalance()
	 {	
		 String totalBlnc=totalBalance.getText();
		 return totalBlnc;
	 }
	
	
	public String validateCurrencies()
	   {
		   if(value1.getText().charAt(0)=='$'&& value2.getText().charAt(0)=='$'&&
		   value3.getText().charAt(0)=='$'&& value4.getText().charAt(0)=='$'&&
		   value5.getText().charAt(0)=='$')
		   return "values are formated as currencies";
		   else return "values are not formated as currencies";
	   }
	public void setWebDriver(WebDriver driver1)
	{
		driver1=driver;
	}
	public boolean checkValGreaterThanZero()
	   {
		   Float val1=Float.valueOf(value1.getText().substring(1));
		   Float val2=Float.valueOf(value2.getText().substring(1));
		   Float val3=Float.valueOf(value3.getText().substring(1));
		   Float val4=Float.valueOf(value4.getText().substring(1));
		   Float val5=Float.valueOf(value5.getText().substring(1));
		   if(val1>0&&val2>0&&val3>0&&val4>0&&val5>0)
			   return true;
		   else
		     return false;
	   }
	public boolean checkCountOfNumDisplayed()
	{
		if(value1.getText().equals("")||value2.getText().equals("")||value3.getText().equals("")||value4.getText().equals("")||value5.getText().equals(""))
			return true;
		else return false;
	}
}
