exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 4,
    capabilities: [
        {
            maxInstances: 2,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless=new', '--disable-gpu', '--window-size=1280,800']
            }
        },
        {
            maxInstances: 2,
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['-headless']
            }
        }
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        'chromedriver',
        'geckodriver'
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
