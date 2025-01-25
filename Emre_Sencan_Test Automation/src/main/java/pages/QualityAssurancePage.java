package pages;

import common.BaseLibrary;
import common.MSAssert;
import io.qameta.allure.Step;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;
import java.util.Set;

public class QualityAssurancePage extends BaseLibrary {

    private final By SEE_ALL_QA_JOBS_BUTTON = By.xpath("//a[contains(text(),'See all QA jobs')]");
    private final By FILTER_BY_LOCATION_DROPDOWN = By.id("select2-filter-by-location-container");
    private final By FILTER_BY_DEPARTMENT_DROPDOWN = By.id("select2-filter-by-department-container");
    private final By JOB_LIST = By.xpath("//div[contains(@class, 'position-list-item-wrapper')]");
    private final By VIEW_ROLE_BUTTON_LIST = By.xpath("//a[contains(text(),'View Role')]");

    public QualityAssurancePage(WebDriver driver) {
        super(driver);
    }

    public QualityAssurancePage acceptCookies() {
        clickElement(By.xpath("//a[contains(text(),'Accept All')]"));
        return this;
    }

    /**
     * Click See All QA Jobs
     *
     * @return
     */
    @Step("Click See All QA Jobs")
    public QualityAssurancePage clickSeeAllQAJobs() {
        clickElement(SEE_ALL_QA_JOBS_BUTTON);
        return this;
    }

    /**
     * Select Location
     *
     * @param location
     * @return
     */
    @Step("Select Location")
    public QualityAssurancePage selectLocation(String location) {
        By lc= By.xpath("//li[contains(text(),'"+location+"')]");
        clickElement(FILTER_BY_LOCATION_DROPDOWN);
        clickElement(lc);
        return this;
    }

    /**
     * Select Department
     *
     * @param department
     * @return
     */
    @Step("Select Department")
    public QualityAssurancePage selectDepartment(String department) {
        By dep= By.xpath("//li[contains(text(),'"+department+"')]");
        clickElement(FILTER_BY_DEPARTMENT_DROPDOWN);
        clickElement(dep);
        return this;
    }

    /**
     * Check Job List
     *
     * @return
     */
    @Step("Check Job List")
    public QualityAssurancePage checkJobList() {
        List<WebElement> jobList = findElements(JOB_LIST);
        MSAssert.assertFalse(jobList.isEmpty(), "No QA jobs found!");
        return this;
    }

    /**
     * Check Job List Details
     *
     * @return
     */
    @Step("Check Job List Details")
    public QualityAssurancePage checkJobListDetails(String department, String location) {
        List<WebElement> jobsDetailsDepartment = findElements(By.xpath("//span[contains(@class, 'position-department')]"));
        List<WebElement> jobsDetailsLocation = findElements(By.xpath("//div[contains(@class, 'position-location')]"));
        for (int i = 0; i < jobsDetailsDepartment.size(); i++) {
            {
                MSAssert.assertTrue(javaScriptGetInnerText(jobsDetailsDepartment.get(i)).contains(department), "Job title does not contain 'Quality Assurance'");
                MSAssert.assertTrue(javaScriptGetInnerText(jobsDetailsLocation.get(i)).contains(location), "Job location is incorrect");
            }
        }
        return this;
    }

    /**
     * Click First View Role Button
     *
     * @return
     */
    @Step("Click First View Role Button")
    public QualityAssurancePage clickFirstViewRoleButton() {
        List<WebElement> viewRoleButtons =findElements(VIEW_ROLE_BUTTON_LIST);
        javaScriptClicker(viewRoleButtons.getFirst());
        return this;
    }

    /**
     * Check Redirection Page
     *
     * @param text
     * @return
     */
    @Step("Check Redirection Page")
    public QualityAssurancePage checkRedirectionPage(String text) {
        Set<String> windowHandles = driver.getWindowHandles();
        String currentWindow = driver.getWindowHandle();
        for (String window : windowHandles) {
            if (!window.equals(currentWindow)) {
                driver.switchTo().window(window);
                break;
            }
        }
        MSAssert.assertTrue(driver.getCurrentUrl().contains(text), "Did not redirect to Lever Application page");
        return this;
    }
}
