package util;

import common.LogManager;
import io.qameta.allure.Attachment;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class ScreenshotUtil {

    @Attachment(value = "Screenshot", type = "image/png")
    public static byte[] takeScreenshot(WebDriver driver, String testName) {
        LogManager log = LogManager.getLogManager();
        byte[] screenshot = new byte[]{};
//        File ss = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
        String timestamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
        String screenshotPath = "screenshots/" + testName + "_" + timestamp + ".png";
        File screenshotFile = new File(screenshotPath);
        try (FileOutputStream fos = new FileOutputStream(screenshotFile)) {
            fos.write(screenshot);
            fos.flush();
            System.out.println("Screenshot saved: " + screenshotPath);

        } catch (WebDriverException e) {
            log.logError("Failed to save screenshot: " + e.getMessage());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return screenshot;
    }
}
