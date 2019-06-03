module.exports = {
    clearMocks: true,

    collectCoverage: true,

    collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],

    coverageDirectory: 'coverage',

    moduleFileExtensions: ['js', 'json', 'jsx'],

    setupFiles: ['<rootDir>/enzyme.config.js'],

    testEnvironment: 'jsdom',

    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

    testPathIgnorePatterns: ['\\\\node_modules\\\\'],

    testURL: 'http://localhost',

    transformIgnorePatterns: ['<rootDir>/node_modules/'],

    verbose: true,

    transform: {
        '.+\\.(css|styl|less|sass|scss)$':
        '<rootDir>/node_modules/jest-css-modules-transform',
        '^.+\\.js?$': 'babel-jest',
        '^.+\\.jsx?$': 'babel-jest'
    }, moduleNameMapper: {
        '^.+\\.(jpg|png|svg)$': 'babel-jest'
    },
    coverageReporters: ['json', 'html', 'lcov'],
    modulePathIgnorePatterns: ['src/index.js', 'src/App.jsx', 'src/reducers/index.js', 'src/store/']
};