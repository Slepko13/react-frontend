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
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/components/**/*.{js,jsx}'],
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
    coverageThreshold: {
        global: {
            branches: 4,
            functions: 4,
            lines: 4,
            statements: 10,
        },
        './src/util/validators.js': {
            branches: 70,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
};
