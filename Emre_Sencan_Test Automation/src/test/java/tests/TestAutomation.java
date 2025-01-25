package tests;

import common.BaseTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import pages.CareersPage;
import pages.HomePage;
import pages.QualityAssurancePage;

import static util.TestData.*;

public class TestAutomation extends BaseTest {


    HomePage homePage;
    CareersPage careersPage;
    QualityAssurancePage qualityAssurancePage;

    @BeforeMethod(alwaysRun = true)
    public void initialize() {
        homePage = new HomePage(driver);
        careersPage = new CareersPage(driver);
        qualityAssurancePage = new QualityAssurancePage(driver);
    }

    @Test(enabled = true, description = "Case1: Check Home Page Is Opened Test")
    public void Case1_CheckHomePageIsOpenedTest() {
        homePage.checkHomePageIsOpen(HOME_PAGE_TITLE);
    }

    @Test(enabled = true, description = "Case2: Check Open QA Opportunities Test")
    public void Case2_CheckOpenQAOpportunitiesTest() {
        homePage.checkHomePageIsOpen(HOME_PAGE_TITLE).clickCareersUnderCompanyHeaderMenu();
        careersPage.checkCareersPageIsOpen()
                .checkLocations(EXPECTED_LOCATIONS)
                .checkAllTeams(EXPECTED_DEPARTMENTS)
                .checkLifeAtInsider(EXPECTED_LIFE_AT_INSIDER_TEXT);
    }

    @Test(enabled = true, description = "Case3: Filter QA Jobs Test")
    public void Case3_FilterQAJobsTest() {
        driver.get(QA_LINK);
        qualityAssurancePage.acceptCookies().clickSeeAllQAJobs().selectLocation(ISTANBUL_TURKEY)
                .selectDepartment(QUALITY_ASSURANCE).checkJobList();
    }

    @Test(enabled = true, description = "Case4: Check Job Details Test")
    public void Case4_CheckJobDetailsTest() {
        driver.get(QA_LINK);
        qualityAssurancePage.acceptCookies().clickSeeAllQAJobs().selectLocation(ISTANBUL_TURKEY)
                .selectDepartment(QUALITY_ASSURANCE).checkJobList().checkJobListDetails("Quality Assurance","Istanbul, Turkey");
    }

    @Test(enabled = true, description = "Case5: Check View Role Redirection Test")
    public void Case5_CheckViewRoleRedirectionTest() {
        driver.get(QA_LINK);
        qualityAssurancePage.acceptCookies().clickSeeAllQAJobs().selectLocation(ISTANBUL_TURKEY)
                .selectDepartment(QUALITY_ASSURANCE).checkJobList()
                .checkJobListDetails(QUALITY_ASSURANCE,ISTANBUL_TURKEY)
                .clickFirstViewRoleButton()
                .checkRedirectionPage("lever.co");
    }

    @Test(enabled = true, description = "Case6: Check Home Page Is Opened Test")
    public void Case6_CheckHomePageIsOpenedFailureTest() {
        homePage.checkHomePageIsOpen("HOME_PAGE_TITLE");
    }

}
