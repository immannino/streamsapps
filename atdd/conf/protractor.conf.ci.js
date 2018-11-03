const config = require('./protractor.conf').config;

config.chromeDriver = '/usr/bin/chromedriver';
config.capabilities.chromeOptions = {
  args: [ 'headless' ]
  };

exports.config = config;