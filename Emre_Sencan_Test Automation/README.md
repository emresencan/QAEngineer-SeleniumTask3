# 🚀 Test Automation UI - Insider

## 📌 Project Overview
This project is a **UI Test Automation Framework** built using **Selenium, TestNG, and Allure Reporting**. It automates the testing process for the **Insider web application**, ensuring that key functionalities work as expected.

## 🛠️ Tech Stack
- **Programming Language:** Java
- **Test Framework:** TestNG
- **Browser Automation:** Selenium WebDriver
- **Reporting:** Allure Reports
- **Build Tool:** Maven

---

## 🔧 Installation & Setup

### **Prerequisites**
Ensure you have the following installed:
- **Java 17+**
- **Maven 3+**
- **Google Chrome (Latest Version)**
- **ChromeDriver (Compatible with Chrome Version)**
- **Mozilla (Latest Version)**
- **FirefoxDriver (Compatible with Mozilla Version)**

### **Clone the Repository**
```sh
git clone https://github.com/emresencan/QAEngineer-SeleniumTask3.git
```

### **Install Dependencies**
```sh
mvn clean install
```

---

## 🎯 Running Tests

### **Run All Tests**
```sh
mvn clean test
```

---

## 📊 Allure Reporting

The framework uses **Allure Reports** for detailed test execution insights, including **screenshots for failed test cases**.

### **Install Allure CLI**
```sh
npm install -g allure-commandline --save-dev
```
or
```sh
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex
brew install allure  # (For macOS)
scoop install allure # (For Windows)
```

### **Generate and View the Report**
```sh
mvn clean test
allure serve target
```

---

## 📸 Screenshot Integration
Allure automatically captures **screenshots for failed tests**.

- If a test **fails**, a **screenshot is attached** in the Allure report.
- The **screenshot is taken before WebDriver is closed** to ensure accurate reporting.

### **Screenshot Capture Code**
```java
import io.qameta.allure.Attachment;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class AllureScreenshotUtil {
    @Attachment(value = "Screenshot", type = "image/png")
    public static byte[] saveScreenshot(WebDriver driver) {
        return ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
    }
}
```

---

## 📌 **Developer Notes**
- To run tests on **Chrome & Firefox**, add the browser parameter in the `config.properties` file.
- **Allure Report is used** for detailed test reporting

---

## 📩 Contact
    
- **GitHub:** [GitHub](https://github.com/emresencan)
- **Email:** y.emresencan@hotmail.com
- **LinkedIn:** [LinkedIn](https://www.linkedin.com/in/emre-sencan-890b043b)

---

### 🚀 Happy Testing! 🎯

