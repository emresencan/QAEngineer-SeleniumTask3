package pages;

import common.BaseLibrary;
import common.MSAssert;
import io.qameta.allure.Step;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HomePage extends BaseLibrary {


    public HomePage(WebDriver driver) {
        super(driver);
    }

    /**
     * Check Home Page Is Open
     *
     * @return
     */
    @Step("Check Home Page Is Open")
    public HomePage checkHomePageIsOpen(String expectedTitle) {
        clickElement(By.xpath("//a[contains(text(),'Accept All')]"));
        String title = driver.getTitle();
        MSAssert.assertTrue(title.contains(expectedTitle),"Home page not loaded!");
        return this;
    }

    /**
     * Click Careers Under Company Header Menu
     *
     * @return
     */
    @Step("Click Careers Under Company Header Menu")
    public CareersPage clickCareersUnderCompanyHeaderMenu() {
        leftMenu(HeaderMenu.headerMenu.COMPANY, HeaderMenu.COMPANY.Careers.getName());
        return new CareersPage(driver);
    }
}
