package common;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LogManager {

    private static final String FORMAT_1 = "    Value: {} = \"{}\"";
    private static LogManager logManager = null;
    private Logger _logger = LoggerFactory.getLogger(LogManager.class);

    public LogManager() {

    }

    synchronized public static LogManager getLogManager() {
        if (logManager == null) {
            logManager = new LogManager();
            // logManager.setLogLevel();
        }
        return logManager;

    }

    /**
     * Log a message at the INFO level (important message).
     *
     * @param msg - the message string to be logged
     * @see Logger#info(String)
     */
    public void logInfo(final String msg) {
        refreshLoggerWithNewClassAndMethodName();
        _logger.info("  Message: {}", msg);

    }

    /**
     * Log an exception (throwable) at the INFO level with an accompanying message.
     *
     * @param msg - the message accompanying the exception
     * @param t   - the exception (throwable) to log
     * @see Logger#info(String, Throwable)
     */
    public void logInfo(final String msg, final Throwable t) {
        refreshLoggerWithNewClassAndMethodName();
        _logger.info("  Message: {}", msg, t);

    }

    private void refreshLoggerWithNewClassAndMethodName() {
        // maybe this number needs to be corrected
        final int stackTraceNumber = 4;

        _logger = LoggerFactory.getLogger(getCallingMethod(stackTraceNumber));
    }

    private String getCallingMethod(final int stackTraceLevel) {
        final StackTraceElement[] stacktrace = Thread.currentThread().getStackTrace();
        final StackTraceElement e = stacktrace[stackTraceLevel];
        final String methodName = e.getMethodName();
        final String className = e.getClassName();

        return className + "." + methodName;
    }

    /**
     * Log a message at the ERROR level (critical message).
     *
     * @param msg - the message string to be logged
     * @see Logger#error(String)
     */
    public void logError(final String msg) {
        refreshLoggerWithNewClassAndMethodName();
        _logger.error("  Message: {}", msg);

    }
}
