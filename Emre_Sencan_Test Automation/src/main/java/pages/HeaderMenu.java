package pages;

import common.BaseLibrary;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HeaderMenu extends BaseLibrary {

	public static final String TOP_MENU_COMPANY_TEXT = "Company";
	public static final String ABOUTUS = "About Us";

	public HeaderMenu(WebDriver driver) {
		super(driver);
	}

	public HeaderMenu openMenu(Enum leftMenu, String subMenu) {
		String menuText = ((headerMenuInterface) leftMenu).getName();
		openMenu(menuText, subMenu);
		return this;
	}

	private void openMenu(String menuText) {
		By menu = By.xpath("//a[normalize-space()='" + menuText + "']");
		clickElement(menu);
	}

	private void openMenu(String menuText, String topSubMenu) {
		By subMenu;
		By menu = By.xpath("//a[normalize-space()='" + menuText + "']");
		subMenu = By.xpath("//a[normalize-space()='" + topSubMenu + "']");
		clickElement(menu);
		clickElement(subMenu);
	}


	public enum headerMenu implements headerMenuInterface {
		COMPANY(TOP_MENU_COMPANY_TEXT);

		private final String name;
//		private String getGroupText;

		headerMenu(String menuText) {
			this.name = menuText;
		}

		public String getName() {
			return name;
		}

//		@Override
//		public String getGroupText() {
//			return null;
//		}

		@Override
		public String toString() {
			return name;
		}
	}


	public enum COMPANY implements HeaderMenuDataInterface {
		AboutUs("About Us"), Newsroom("Newsroom"), Partnership(
				"Partnerships"), Integration("Integrations"),Careers("Careers"),ContactUs("Contact Us");

		private final String name;
//		private final String groupName = headerMenu.COMPANY.getName();

		COMPANY(final String name) {
			this.name = name;
		}

		public String getName() {
			return name;
		}

	}

	public interface headerMenuInterface {
		String getName();
	}

	public interface HeaderMenuDataInterface {
		String getName();
	}
}
