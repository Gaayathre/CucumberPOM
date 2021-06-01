package com.task.pages;

import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.task.setup.TestBase;

public class AddValues {
	
	WebDriver driver;
	 
	//to support encapsulation WebElements are set to private
	
	@FindBy(id="txt_val_1")
	private WebElement value1;
	
	@FindBy(id="txt_val_2")
	private WebElement value2;
	
	@FindBy(id="txt_val_4")
	private WebElement value3;

	@FindBy(id="txt_val_5")
	private WebElement value4;
	
	@FindBy(id="txt_val_6")
	WebElement value5;
	
	@FindBy(id="txt_ttl_val")
	private WebElement totalBalance;
	
	
	public AddValues(WebDriver driver1)
	{
		// @FindBy Annotations are initialized by the PageFactory when the class is initialized.
		PageFactory.initElements(driver1, this);
		driver=driver1;
	}
	
	//passing values to text box
	public void initializeValues(String val1,String val2,String val3,String val4,String val5)
	   {
		   value1.sendKeys(val1);
		   value2.sendKeys(val2);
		   value3.sendKeys(val3);
		   value4.sendKeys(val4);
		   value5.sendKeys(val5);   
	   }
	
	
	//This methods removes ',' from string to convert data to numerical format to perform arithmetic operation
	public String removeComma(String val)
	{
		String res="";
		for(int i=0;i<val.length();i++)
		{
			if(val.charAt(i)==',')
				continue;
			else
				res+=val.charAt(i);
		}
		return res;
	}
	
	public String getSumOfValuesDisplayed()
	   { 
		   /*
		     retrieving the values of text boxes and converting to float to perform addition on numerical data 
		    */
		float val1=Float.parseFloat(removeComma(value1.getAttribute("value").substring(1)));
		   float val2=Float.parseFloat(removeComma(value2.getAttribute("value").substring(1)));
		   float val3=Float.parseFloat(removeComma(value3.getAttribute("value").substring(1)));
		   float val4=Float.parseFloat(removeComma(value4.getAttribute("value").substring(1)));
		   float val5=Float.parseFloat(removeComma(value5.getAttribute("value").substring(1)));
		   
		   float res=val1+val2+val3+val4+val5;
		   /*
		       converting the sum to string value preceding with '$' to compare with total balance
		    */
		   return "$"+res;
	   }
	   
	//return totalBalance
	 public String getTotalBalance()
	 {	
		 String totalBlnc=totalBalance.getText();
		 return totalBlnc;
	 }
	
	
	public String validateCurrencies()
	   {
		/*
		  retrieving first character of all textbox
		  if the first character of all textbox with '$' -- then values are formated as currencies
		  else -- values are not formated as currencies
		 */
		   if(value1.getAttribute("value").startsWith("$")&& value2.getAttribute("value").startsWith("$")&&
		   value3.getAttribute("value").startsWith("$")&& value4.getAttribute("value").startsWith("$")&&
		   value5.getAttribute("value").startsWith("$"))
		   return "values are formated as currencies";
		   else return "values are not formated as currencies";
	   }
	public void setWebDriver(WebDriver driver1)
	{
		driver1=driver;
	}
	
	public boolean checkValGreaterThanZero()
	   {
		/*
		  retrieving the entered value of text box using getAttibute() 
		  
		  retrieving the value from the string and comparing if they are >0 
		 */
		   float val1=Float.parseFloat(removeComma(value1.getAttribute("value").substring(1)));
		   float val2=Float.parseFloat(removeComma(value2.getAttribute("value").substring(1)));
		   float val3=Float.parseFloat(removeComma(value3.getAttribute("value").substring(1)));
		   float val4=Float.parseFloat(removeComma(value4.getAttribute("value").substring(1)));
		   float val5=Float.parseFloat(removeComma(value5.getAttribute("value").substring(1)));
		   
		   if(val1>0&&val2>0&&val3>0&&val4>0&&val5>0)
			   return true;
		   else
		     return false;
	   }
	
	public boolean checkCountOfNumDisplayed()
	{
		/*
		  fetch the values of all text box and and check they are empty or not
		 */
		if(value1.getAttribute("value").equals("")||value2.getAttribute("value").equals("")||value3.getAttribute("value").equals("")||value4.getAttribute("value").equals("")||value5.getAttribute("value").equals(""))
			return false;
		else return true;
	}
}
