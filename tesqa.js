var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
driver.get('https://kasirpintar.co.id');
driver.manage().window().maximize();

driver.findElement(webdriver.By.linkText("Karir")).click();

driver.findElement(webdriver.By.xpath("//input[@id='posisi']")).sendKeys("Quality Assurance Engineer");

driver.findElement(webdriver.By.css("option[value='4']")).click();

driver.findElement(webdriver.By.xpath("//button[@id='cari']")).click;


// driver.findElement(webdriver.By.xpath("//a[contains(text(),'Karir')]")).click();