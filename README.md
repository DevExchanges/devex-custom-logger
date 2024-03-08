# DevEx Customize Logger

DevEx Customize Logger is a flexible logging utility for Node.js that allows you to log messages with different log levels. It includes features like log rotation, customizable log levels, and the ability to enable or disable logging.

## Installation

```bash
npm install devex-customize-logger
```
# Usage
```javascript
// Import the logger
const logger = require('devex-customize-logger');

// Log messages with different log levels
logger.info('This is an information message.');
logger.debug('This is a debug message.');
```
# Configuration
By default, DevEx Custom Logger uses the following configuration:
* **Log Level: `info`**
* **Log Enable: `true`**
* **Log Location: `logs/`**
* **Log Prefix: `application`**

## Customizing Configuration

Users can create a `loggingConfig.json` file in their project's root directory to customize the configuration:

```json
// loggingConfig.json
{
  "logLevel": "debug",
  "logEnabled": true,
  "logLocation": "custom-logs",
  "logPrefix": "my-app"
}
```
**Configuration Options**

    logLevel: Log level threshold (e.g., 'info', 'debug', 'warn').
    logEnabled: Enable or disable logging (true or false).
    logLocation: Directory where log files are stored.
    logPrefix: Prefix for log file names.
# License
This project is licensed under the MIT License - see the LICENSE file for details.
