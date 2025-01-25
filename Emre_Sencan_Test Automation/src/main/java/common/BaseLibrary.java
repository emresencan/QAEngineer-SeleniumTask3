package common;

import com.google.common.base.Stopwatch;
import com.google.common.util.concurrent.Uninterruptibles;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.HeaderMenu;

import java.time.Duration;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import static java.util.concurrent.TimeUnit.MILLISECONDS;

public class BaseLibrary {

    private static final int RETRY_COUNT = 30;
    protected final LogManager log = LogManager.getLogManager();
    protected WebDriver driver;
    protected WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    private Duration waitForLoading = Duration.ofSeconds(30);

    public BaseLibrary(WebDriver driver) {
        this.driver = driver;
    }

    protected Duration getWaitForLoading() {
        return waitForLoading;
    }

    protected void clickElement(By by) {
        WebElement element = null;
        waitMiliSeconds(300);
        try {
            element = findElement(by);
            element.click();
            log.logInfo("Clicked element : " + element);
        } catch (WebDriverException e) {
            retryToClick(element);
        }
    }

    protected void clickElement(WebElement element) {
        try {
            element.click();
            log.logInfo("Clicked element : " + element);
            // Uninterruptibles.sleepUninterruptibly(500, TimeUnit.MILLISECONDS);
        } catch (WebDriverException e) {
            retryToClick(element);
        }
    }

    protected void clickElement(By by, int index) {
        WebElement element = null;
        try {
            element = findElementWithIndex(by, index);
            element.click();
            log.logInfo("Clicked element : " + element);
            // Uninterruptibles.sleepUninterruptibly(500, TimeUnit.MILLISECONDS);
        } catch (WebDriverException e) {
            retryToClick(element);
        }
    }

    /**
     * Provide data input(By by, String text, int maxWait, int index)
     *
     * @param by
     * @param text
     */
    protected void sendKeys(By by, String text) {
        waitMiliSeconds(300);
        WebElement element = findElement(by);
        log.logInfo("Element Send Keys : " + text + "-" + element);
        element.sendKeys(text);
    }

    public BaseLibrary selectDropdownMenu(By by, String value) {
        Select select = new Select(findElement(by));
        select.selectByVisibleText(value);
        return this;
    }

    public BaseLibrary selectDropdownMenuWithValue(By by, String value) {
        Select select = new Select(findElement(by));
        select.selectByValue(value);
        return this;
    }

    private void retryToClick(WebElement element) {
        if (element == null) {
            MSAssert.fail("element is null! ");
        }

        int i = 0;
        while (i < RETRY_COUNT) {
            try {
                log.logInfo("Retrying to click " + element);
                WebElement refreshedElement = refreshWebElement(element);
                refreshedElement.click();
                log.logInfo("Clicked element : " + element);
                return;
            } catch (WebDriverException e) {
                i++;
                Uninterruptibles.sleepUninterruptibly(300, MILLISECONDS);
                log.logInfo(String.format("Couldn't click to element : %s after %d tries", element, i));
            }
        }
        MSAssert.fail("Click element failed : " + element);
    }

    private WebElement refreshWebElement(WebElement element) {
        String elementInfo = element.toString();
        elementInfo = elementInfo.substring(elementInfo.indexOf("->"));
        String elementLocator = elementInfo.substring(elementInfo.indexOf(": "));
        elementLocator = elementLocator.substring(2, elementLocator.length() - 1);
        log.logInfo(String.format("Element info : %s", elementInfo));

        WebElement webElement = null;
        if (elementInfo.contains("-> link text:")) {
            webElement = findElement(By.linkText(elementLocator));
        } else if (elementInfo.contains("-> name:")) {
            webElement = findElement(By.name(elementLocator));
        } else if (elementInfo.contains("-> id:")) {
            webElement = findElement(By.id(elementLocator));
        } else if (elementInfo.contains("-> xpath:")) {
            webElement = findElement(By.xpath(elementLocator));
        } else if (elementInfo.contains("-> class name:")) {
            webElement = findElement(By.className(elementLocator));
        } else if (elementInfo.contains("-> css selector:")) {
            webElement = findElement(By.cssSelector(elementLocator));
        } else if (elementInfo.contains("-> partial link text:")) {
            webElement = findElement(By.partialLinkText(elementLocator));
        } else if (elementInfo.contains("-> tag name:")) {
            webElement = findElement(By.tagName(elementLocator));
        } else {
            log.logError("No valid locator found. Couldn't refresh element");
        }
        return webElement;
    }

    protected WebElement findElement(By by) {
        try {
            WebElement webElement = driver.findElement(by);
            if (webElement.isEnabled() && webElement.isDisplayed()) {
                log.logInfo("element is enabled and displayed " + webElement);
                return webElement;
            }
            return retryTofindElement(by);
        } catch (WebDriverException e) {
            return retryTofindElement(by);
        }
    }

    protected List<WebElement> findElements(By by) {
        try {
            List<WebElement> webElements = driver.findElements(by);
            log.logInfo(String.format("Found elements by : %s.", by));
            return webElements;

        } catch (WebDriverException e) {
            log.logInfo("Couldn't find the element. Retrying to find..." + by.toString());
            return retryTofindElements(by);
        }
    }

    protected WebElement findElementWithIndex(By by, int index) {
        try {
            WebElement webElement = driver.findElements(by).get(index);
            if (webElement.isEnabled() && webElement.isDisplayed()) {
                return webElement;
            }

            return retryTofindElementWithIndex(by, index);
        } catch (WebDriverException e) {
            log.logInfo("Couldn't find the element. Retrying to find..." + by.toString());
            return retryTofindElementWithIndex(by, index);
        }
    }

    private WebElement retryTofindElement(By by, boolean... failTest) {
        int i = 0;
        while (i < RETRY_COUNT) {
            try {
                waitMiliSeconds(500);
                WebElement webElement = driver.findElement(by);
                if (webElement.isEnabled() && webElement.isDisplayed()) {
                    log.logInfo(String.format("Found element after retry. Element : %s", webElement));
                    return webElement;
                } else {
                    i++;
                    log.logInfo("Element isn't enable or display. Retrying to find..." + by);
                }

            } catch (WebDriverException e) {
                i++;
                log.logInfo("Couldn't find the element. Retrying to find..." + by.toString());
                Uninterruptibles.sleepUninterruptibly(300, MILLISECONDS);
            }
        }
        if (failTest.length > 0 && !failTest[0]) {
            return null;
        }
        MSAssert.fail("Couldn't find element " + by + " after " + i + " tries");
        return null;
    }

    private List<WebElement> retryTofindElements(By by) {
        int i = 0;
        while (i < RETRY_COUNT) {
            try {
                List<WebElement> webElements = driver.findElements(by);
                log.logInfo(String.format("Found elements by : %s.", by));
                return webElements;

            } catch (WebDriverException e) {
                i++;
                log.logInfo("Couldn't find the element. Retrying to find..." + by.toString());
                Uninterruptibles.sleepUninterruptibly(300, MILLISECONDS);
            }
        }
        MSAssert.fail("Couldn't find element after " + i + " tries");
        return null;
    }

    private WebElement retryTofindElementWithIndex(By by, int index) {
        int i = 0;
        while (i < RETRY_COUNT) {
            try {
                WebElement webElement = driver.findElements(by).get(index);
                if (webElement.isEnabled() && webElement.isDisplayed()) {
                    return webElement;
                }

            } catch (WebDriverException e) {
                i++;
                log.logInfo("Couldn't find the element. Retrying to find..." + by.toString());
            }
        }

        MSAssert.fail(String.format("Couldn't find element %s after %d tries", by, RETRY_COUNT));
        return null;
    }

    public void waitMiliSeconds(int sleepTime) {
        try {
            MILLISECONDS.sleep(sleepTime);
        } catch (InterruptedException e) {
            log.logInfo(e.getMessage(), e);
            Thread.currentThread().interrupt();
        }
    }

    /**
     * JavaScript Clicker
     *
     * @param element
     */
    protected void javaScriptClicker(By element) {
        executeJS("arguments[0].click();", findElement(element));
    }

    /**
     * JavaScript Clicker
     *
     * @param element
     */
    protected void javaScriptClicker(WebElement element) {
        executeJS("arguments[0].click();", element);
    }

    /**
     * Java Script Get Inner Text
     *
     * @param element
     */
    protected String  javaScriptGetInnerText(WebElement element) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        return (String) js.executeScript("return arguments[0].innerText;", element);
    }

    /**
     * Javascript executer
     *
     * @param script
     * @param obj
     */
    private void executeJS(String script, Object... obj) {
        getJSExecutor().executeScript(script, obj);
    }

    protected JavascriptExecutor getJSExecutor() {
        return (JavascriptExecutor) driver;
    }

    /**
     * Check the visibility of element
     *
     * @param by
     * @param timeoutInSeconds
     * @return
     */
    protected boolean isElementDisplayed(By by, int timeoutInSeconds) {
        try {
            return driver.findElement(by).isDisplayed();
        } catch (WebDriverException e) {
            return retryIsElementDisplayed(by, timeoutInSeconds);
        }
    }

    private boolean retryIsElementDisplayed(By by, int timeoutInSeconds) {
        Stopwatch sw = Stopwatch.createStarted();
        while (sw.elapsed().getSeconds() < timeoutInSeconds) {
            try {
                WebElement webElement = driver.findElement(by);
                if (webElement.isDisplayed()) {
                    log.logInfo(String.format("Element : %s is displayed", webElement));
                    return true;
                }

            } catch (WebDriverException e) {
                log.logInfo(String.format("Element : %s is not displayed", by.toString()));
                Uninterruptibles.sleepUninterruptibly(500, MILLISECONDS);
            }
        }
        return false;
    }

    public BaseLibrary scrollToElement(By by) {
        WebElement element = findElement(by);
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView({block: 'center'})", element);
        waitMiliSeconds(300);
        return this;
    }
    public BaseLibrary scrollToElement(WebElement el) {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView({block: 'center'})", el);
        waitMiliSeconds(300);
        return this;
    }

    public void waitForLoadingJS(WebDriver driver, Duration timeoutSec) {
        AtomicInteger isJsFinished = new AtomicInteger();
        AtomicInteger isAjaxFinished = new AtomicInteger();
        final int jsCompleteCheck = 3;
        new WebDriverWait(driver, timeoutSec, Duration.ofMillis(10)).until(d -> {
            JavascriptExecutor js = (JavascriptExecutor) d;
            try {
                if ((boolean) js.executeScript(
                        "return (document.readyState == \"complete\" || document.readyState == \"interactive\")"))
                    isJsFinished.set(jsCompleteCheck);
                // Allure.addAttachment("Şu kadar süre loading beklendi: " + timeoutSec, "");
            } catch (Exception e) {
                isJsFinished.getAndIncrement();
                // System.out.println("Load: isJsFinished error: " + e.getMessage());
            }

            try {
                if ((boolean) js.executeScript(
                        "var result = true; try { result = (typeof jQuery != 'undefined') ? jQuery.active == 0 : true } catch (e) {}; return result;"))
                    isAjaxFinished.set(jsCompleteCheck);
            } catch (Exception e) {
                isAjaxFinished.getAndIncrement();
            }

            return isJsFinished.get() >= jsCompleteCheck && isAjaxFinished.get() >= jsCompleteCheck;

        });
    }

    public HeaderMenu leftMenu(Enum leftMenu, String subMenu) {
        return new HeaderMenu(driver).openMenu(leftMenu, subMenu);
    }


}
