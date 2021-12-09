module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 2021, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true // Enable JSX since we're using React
    }
  },
  settings: {
    react: {
      version: 'detect' // Automatically detect the react version
    }
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
    es2021: true
  },
  plugins: ['react'],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/img-redundant-alt': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'func-names': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-console': 'off'
  }
};

// 'import/extensions': 'off',
// 'jsx-a11y/click-events-have-key-events': 'off',
// 'jsx-a11y/no-static-element-interactions': 'off',
// 'jsx-a11y/img-redundant-alt': 'off',
// 'jsx-a11y/alt-text': 'off',
// 'jsx-a11y/anchor-is-valid': 'off',
// "no-use-before-define": "off",
// "import/no-unresolved": "off",
// "no-undef": "off",
// "react/function-component-definition": "off",
// "@typescript-eslint/no-use-before-define": ["error"]
