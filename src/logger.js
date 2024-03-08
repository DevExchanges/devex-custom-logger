const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const { existsSync, mkdirSync, readFileSync } = require('fs');
const { join } = require('path');

const getDefaultConfig = () => ({
  logLevel: 'info',
  logEnabled: true,
  logLocation: 'logs',
  logPrefix: 'application',
});

const loadUserConfig = () => {
  try {
    const configPath = join(process.cwd(), 'loggingConfig.json');
    const configContent = readFileSync(configPath, 'utf8');
    return JSON.parse(configContent);
  } catch (error) {
    return {};
  }
};

const getLogger = () => {
  const defaultConfig = getDefaultConfig();
  const userConfig = loadUserConfig();
  const config = { ...defaultConfig, ...userConfig };

  const logsDir = join(process.cwd(), config.logLocation);
  if (!existsSync(logsDir)) {
    mkdirSync(logsDir);
  }

  const logger = winston.createLogger({
    level: config.logLevel,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.simple()
    ),
    transports: [
      new winston.transports.Console({ silent: !config.logEnabled }),
      new DailyRotateFile({
        level: config.logLevel,
        filename: join(logsDir, `${config.logPrefix}-%DATE%.log`),
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
      }),
    ],
  });

  return logger;
};

module.exports = { getDefaultConfig, loadUserConfig, getLogger };
