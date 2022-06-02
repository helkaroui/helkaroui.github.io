---
title: Hacks & Tricks
---

### Generic Solution for Captcha

However, there are some generic approaches to avoid getting detected while web scraping:
- The first and foremost attribute a website can determine your script/program by is through your monitor size. So it is recommended not to use the conventional Viewport.
- If you need to send multiple requests to a website, keep on changing the User Agent on each request. Here you can find a detailed discussion on Way to change Google Chrome user agent in Selenium?
- To simulate humanlike behavior, you may require to slow down the script execution even beyond WebDriverWait and expected_conditions inducing time.sleep(secs). Here you can find a detailed discussion on How to sleep Selenium WebDriver in Python for milliseconds



```java
public class ReCaptcha_click {

    public static void main(String[] args) {

        System.setProperty("webdriver.chrome.driver", "C:\\Utility\\BrowserDrivers\\chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("start-maximized");
        options.addArguments("disable-infobars");
        options.addArguments("--disable-extensions");
        WebDriver driver = new ChromeDriver(options);
        driver.get("https://rsps100.com/vote/760");
        new WebDriverWait(driver, 10).until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(By.xpath("//iframe[starts-with(@name, 'a-') and starts-with(@src, 'https://www.google.com/recaptcha')]")));
        new WebDriverWait(driver, 20).until(ExpectedConditions.elementToBeClickable(By.cssSelector("div.recaptcha-checkbox-checkmark"))).click();
    }
}
```



- click() on the element, as the desired element is within an \<iframe\> so you have to:

    Induce a waiter and switch to the desired frame.
    Induce a waiter for the desired element to be clickable.

    You can use the following solution:
```
.SwitchToFrame.FindElementByXPath("//iframe[contains(@src, 'recaptcha') and not(@title='recaptcha challenge')]", timeout:=10000)
.FindElementByCss("div.recaptcha-checkbox-checkmark").Click
```

