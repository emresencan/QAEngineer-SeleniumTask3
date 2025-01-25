package PropertiesManager;

import common.MSAssert;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class Configurations {

	public static Properties properties;

	public static Properties getProperties(String propType) {
		properties = new Properties();
		FileInputStream configFile = null;
		String path = null;
		path = System.getProperty("user.dir") + "\\src\\main\\resources\\config.properties";
//				path = System.getenv("config");

		try {
			configFile = new FileInputStream(path);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		try {
			properties.load(configFile);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return properties;
	}
}
