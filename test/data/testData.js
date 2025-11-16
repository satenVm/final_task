// Test data provider for login tests

// Password constant - used by all users
const PASSWORD = 'secret_sauce';

// Valid usernames from Accepted username section
const validUsernames = [
    'standard_user',
    'problem_user',
    'performance_glitch_user'
];

// Generate credentials dynamically to avoid password duplication
const validCredentials = validUsernames.map(username => ({
    username,
    password: PASSWORD
}));

const testData = {
    // Valid usernames from Accepted username section
    validUsernames,
    
    // Password for all users
    password: PASSWORD,
    
    // Test credentials for UC-3 (generated dynamically)
    validCredentials,
    
    // Error messages
    errorMessages: {
        usernameRequired: 'Epic sadface: Username is required',
        passwordRequired: 'Epic sadface: Password is required'
    },
    
    // Expected page title after successful login
    expectedPageTitle: 'Swag Labs'
};

module.exports = testData;


