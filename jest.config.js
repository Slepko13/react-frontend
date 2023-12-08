module.exports = {
    roots: ['<rootDir>/src'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        // '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.js'
    },
    collectCoverage: true,
    testPathIgnorePatterns: ['/node_modules/', '/build/'],
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageReporters: [
        'json',
        [
            'lcov',
            {
                projectRoot: '../../../../../',
            },
        ],
        'text',
        'clover',
        'json-summary',
    ],
};
