package listener;

import common.BaseLibrary;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.events.WebDriverListener;

import java.sql.Timestamp;
import java.time.Duration;

public class DriverEventListener extends BaseLibrary implements WebDriverListener {

private static final boolean logs = false;
Duration timeout = getWaitForLoading();

public DriverEventListener(WebDriver driver) {
    super(driver);
}

@Override
public void beforeFindElement(WebDriver driver, By locator) {
    waitForLoadingJS(driver, timeout);
    WebDriverListener.super.beforeFindElement(driver, locator);
}

@Override
public void afterFindElement(WebDriver driver, By locator, WebElement result) {
    waitForLoadingJS(driver, timeout);
    if (logs) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        log.logInfo(String.format(timestamp + "    Found elements by : %s.", locator.toString()));
    }
    WebDriverListener.super.afterFindElement(driver, locator, result);
}

@Override
public void afterClick(WebElement element) {
    waitForLoadingJS(driver, timeout);
    WebDriverListener.super.afterClick(element);
    if (logs) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        log.logInfo(String.format(timestamp + "    clicked element : " + element.toString()));
    }
}

@Override
public void beforeSendKeys(Alert alert, String text) {
    waitForLoadingJS(driver, timeout);
    WebDriverListener.super.beforeSendKeys(alert, text);
}

}
