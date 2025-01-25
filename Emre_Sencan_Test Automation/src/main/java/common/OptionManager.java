package common;

import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxOptions;

import java.util.HashMap;
import java.util.Map;

public class OptionManager {
    public static ChromeOptions getChromeOptions() {


        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-blink-features=AutomationControlled");
        options.addArguments("--disable-popup-blocking");
        options.addArguments("--disable-notifications");
        options.addArguments("--start-maximized");
        options.addArguments("--no-sandbox");
        options.addArguments("--ignore-certificate-errors");
        options.addArguments("--disable-dev-shm-usage");
        options.addArguments("--remote-allow-origins=*");
        System.setProperty("browserVersion", options.getBrowserVersion());
        System.setProperty("browserVersion", options.getBrowserName());
        return options;
    }

    public static FirefoxOptions getFirefoxOptions() {
        FirefoxOptions options = new FirefoxOptions();
        options.addPreference("network.cookie.cookieBehavior", 2);
        options.addPreference("privacy.trackingprotection.enabled", true);
        options.addPreference("dom.webnotifications.enabled", false);
        options.addPreference("dom.push.enabled", false);
        options.addPreference("network.http.use-cache", false);
        options.addPreference("security.insecure_field_warning.contextual.enabled", false);
        options.addPreference("browser.popups.showPopupBlocker", false);
        options.addArguments("--ignore-certificate-errors");
        System.setProperty("browserVersion", options.getBrowserVersion());
        System.setProperty("browserVersion", options.getBrowserName());
        return options;
    }
}
