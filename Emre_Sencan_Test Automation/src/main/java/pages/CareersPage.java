package pages;

import common.BaseLibrary;
import common.MSAssert;
import io.qameta.allure.Step;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.time.Duration;
import java.util.List;

public class CareersPage extends BaseLibrary {

    private final By LOCATIONS = By.cssSelector(".location-info p");
    private final By ICON_ARROW_RIGHT = By.xpath("//i[contains(@class, 'icon-arrow-right location-slider-next')]");
    private final By SEE_ALL_TEAMS_BUTTON = By.xpath("//a[text()='See all teams']");
    private final By ALL_TEAMS = By.xpath("//div[contains(@class, 'job-title')]//h3");
    private final By LIFE_AT_INSIDER_TEXT = By.xpath("//h2[text()='Life at Insider']//..//..//..//p");

    public CareersPage(WebDriver driver) {
        super(driver);
    }

    /**
     * Check Careers Page Is Open
     *
     *
     * @return
     */
    @Step("Check Careers Page Is Open")
    public CareersPage checkCareersPageIsOpen(){
        MSAssert.assertTrue(driver.getCurrentUrl().contains("careers"),"Careers page could not open!!!");
        return this;
    }

    /**
     * Check Locations
     *
     * @param expectedLocations
     * @return
     */
    @Step("Check Locations")
    public CareersPage checkLocations(List<String> expectedLocations){
        List<WebElement> locationElements  =findElements(LOCATIONS);
        scrollToElement(LOCATIONS);
        for (String expectedLocation : expectedLocations) {
            boolean found = false;
            for (int i = 0; i < expectedLocations.size(); i++) {
                for (WebElement location : locationElements) {
                    if (location.getText().trim().equalsIgnoreCase(expectedLocation)) {
                        found = true;
                        break;
                    }
                }
                if (found) break;
                clickElement(ICON_ARROW_RIGHT);
                locationElements = findElements(LOCATIONS);
            }
            MSAssert.assertTrue(found, expectedLocation + " could not found!");
        }
        return this;
    }

    /**
     * Check All Teams
     *
     * @param expectedDepartments
     * @return
     */
    @Step("Check All Teams")
    public CareersPage checkAllTeams(List<String> expectedDepartments){

        scrollToElement(SEE_ALL_TEAMS_BUTTON);
        clickElement(SEE_ALL_TEAMS_BUTTON);
//        waitForLoadingJS(driver, Duration.ofSeconds(10));
        List<WebElement> departmentElements = findElements(ALL_TEAMS);
        for (String expectedDepartment : expectedDepartments) {
            boolean found = false;

            for (WebElement departmentElement : departmentElements) {
                if (departmentElement.getText().trim().equalsIgnoreCase(expectedDepartment)) {
                    scrollToElement(departmentElement);
                    found = true;
                    break;
                }
            }
            MSAssert.assertTrue(found, expectedDepartment + "could not found!");
        }
        return this;
    }

    /**
     * Check Life At Insider
     *
     * @param expectedText
     * @return
     */
    @Step("Check Life At Insider")
    public CareersPage checkLifeAtInsider(String expectedText) {
        String actualText = findElement(LIFE_AT_INSIDER_TEXT).getText();
        MSAssert.assertEquals(actualText,expectedText);
        return this;
    }
}
