module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: 'module'
    },
    plugins: ['react', 'react-native'],
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true }
        ],
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/prefer-stateless-function': [0],
        'react/jsx-indent': [0],
        'react/sort-comp': [0],
        'react/jsx-indent-props': [0],
        'react/destructuring-assignment': [0],
        'react/forbid-prop-types': [0],
        'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
        'react/jsx-props-no-spreading': [0],
        'no-use-before-define': [0],
        'no-param-reassign': [0],
        'no-console': [0],
        'no-useless-constructor': [0],
        'react/jsx-no-duplicate-props': [0],
        'react/no-array-index-key': [0],
        'max-len': [0],
        'react/jsx-one-expression-per-line': [0],
        'comma-dangle': [0],
        'jsx-a11y/alt-text': [0],
        'object-curly-newline': [0],
        quotes: [
            'error',
            'single',
            { avoidEscape: true, allowTemplateLiterals: false }
        ],
        'consistent-return': 0,
        indent: [0, 4],
        'no-else-return': 1,
        semi: [1, 'always'],
        'space-unary-ops': 2
    }
};
