exports.config = {
    runner: 'local',
    
    // Test specs
    specs: [
        './test/specs/**/*.js'
    ],
    
    // Capabilities
    maxInstances: 2, // Run 2 instances in parallel (one for Chrome, one for Firefox)
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
    
    // Base URL
    baseUrl: 'https://www.saucedemo.com/',
    
    // Test framework
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
    // Reporters
    reporters: ['spec'],
    
    // Logging
    logLevel: 'info',
    
    // Hooks
    before: function (capabilities, specs) {
        // Set CSS selector strategy
        browser.setTimeout({ 'implicit': 10000 });
    },
    
    // Services (not needed for v7, drivers are handled automatically)
};


