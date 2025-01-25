package common;

import javafx.util.Pair;
import org.testng.Assert;

public class MSAssert {

    /**
     * Asserts that a condition is true. If it isn't, an AssertionError, with the
     * given message, is thrown.
     *
     * @param condition the condition to evaluate
     * @param message   the assertion error message
     */
    public static void assertTrue(final boolean condition, final String message) {
        Assert.assertTrue(condition, message);
    }

    /**
     * Asserts that a condition is false. If it isn't, an AssertionError, with the
     * given message, is thrown.
     *
     * @param condition
     *            the condition to evaluate
     * @param message
     *            the assertion error message
     */
    public static void assertFalse(final boolean condition, final String message) {
        Assert.assertFalse(condition, message);
    }

    public static void assertEquals(final Object actual, final Object expected) {
        try {
            Assert.assertEquals(actual, expected);
            System.out.println("PASS: Status Code Validation :  | Actual: " + actual + " | Expected: " + expected);
        } catch (AssertionError e) {
            System.out.println("FAIL: Status Code Validation : | Actual: " + actual + " | Expected: " + expected);
            throw e;
        }
    }

    public static void assertContainsCaseInsensitive(final String actual, final String searchPattern) {
        assertContains(actual, searchPattern, false);
    }

    private static void assertContains(final String actual, final String searchPattern, final boolean caseSensitive) {
        final Pair<String, String> actualAndSearchPattern = checkParametersAndHandleCaseSensitivity(actual, searchPattern, caseSensitive);

        if (actualAndSearchPattern.getKey().contains(actualAndSearchPattern.getValue())) {
            System.out.println("PASS: Result Validation | Actual contains: " + searchPattern);
        } else {
            System.out.println("FAIL: Result Validation | Actual does not contain: " + searchPattern);
            MSAssert.fail(String.format("Actual string [%s] does not contain searchPattern [%s]. Message: %s", actual, searchPattern));
        }
    }

    private static Pair<String, String> checkParametersAndHandleCaseSensitivity(final String actual, final String searchPattern, final boolean caseSensitive) {
        if (searchPattern == null) {
            MSAssert.fail("searchPattern was null");
        }
        if (actual == null) {
            MSAssert.fail("actual string was null");
        }

        if (caseSensitive) {
            return new Pair<String, String>(actual, searchPattern);
        }
        return new Pair<String, String>(actual.toLowerCase(), searchPattern.toLowerCase());
    }

    public static void fail(final String message) {
        System.out.println("FAIL: " + message);
        Assert.fail(message);
    }
}
