exports.config = {
    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [],
    baseUrl: 'https://www.saucedemo.com/',
    maxInstances: 2,

    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage']
            }
        },
        {
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['--headless']
            }
        }
    ],

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
