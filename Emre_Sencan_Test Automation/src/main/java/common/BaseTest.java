package common;

import PropertiesManager.Configurations;
import io.qameta.allure.Attachment;
import listener.DriverEventListener;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.events.EventFiringDecorator;
import org.testng.ITestResult;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import util.ScreenshotUtil;

public class BaseTest {

    protected WebDriver driver;

    @BeforeMethod(alwaysRun = true)
    public void setup() {
        String browser = Configurations.getProperties("config").getProperty("browser");
        if(browser.equals("chrome") )
            driver = new ChromeDriver(OptionManager.getChromeOptions());
        else if(browser.equals("firefox")){
            driver = new FirefoxDriver(OptionManager.getFirefoxOptions());
            driver.manage().window().maximize();
        }
        DriverEventListener driverEventListener = new DriverEventListener(driver);
        driver = new EventFiringDecorator(driverEventListener).decorate(driver);
        driver.get("https://useinsider.com/");
    }


    @AfterMethod
    public void teardown(ITestResult result) {
        if (ITestResult.FAILURE == result.getStatus()) {
            ScreenshotUtil.takeScreenshot(driver, result.getName());
        }
        driver.quit();
    }
}
