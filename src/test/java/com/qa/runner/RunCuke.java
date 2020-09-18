package com.qa.runner;


import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;


@CucumberOptions(
		features={"src/test/resources/features/"}, 
		glue= {"com.qa.steps"}, 
		monochrome=true,
		plugin={"html:target/cucumber-html-report",
		"json:target/cucumber-reports/cucumber.json",
		"junit:target/cucumber-reports/cucumber.xml","com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"}
		)

public class RunCuke extends AbstractTestNGCucumberTests{

	/*@BeforeGroups
	public static void setup() {
		
		
		SimpleDateFormat sdf=new SimpleDateFormat("ddMMyyyy_hhmmss");
		Date curDate=new Date();
		String strDate=sdf.format(curDate);
		String fileName=System.getProperty("user.dir")+"\\target\\Extents_Reports\\"+ strDate+".html";
		File newFile= new File(fileName);		  
		
		
		  ExtentCucumberFormatter.initiateExtentCucumberFormatter(newFile,false);
		  ExtentCucumberFormatter.loadConfig(new
		  File("src/test/resources/extent-config.xml"));
		  ExtentCucumberFormatter.addSystemInfo("Browser Name", "Firefox");
		  ExtentCucumberFormatter.addSystemInfo("Browser Version", "v76.0.1");
		  ExtentCucumberFormatter.addSystemInfo("Selenium version", "v3.141.59");
		  
		Map systemInfo= new HashMap();
		systemInfo.put("Cucumber version", "v1.0.0");
		systemInfo.put("Extent Cucumber Reporter version", "v1.0.12");
		ExtentCucumberFormatter.addSystemInfo(systemInfo);*/
	
	
}
