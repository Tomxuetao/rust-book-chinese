module.exports = {
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'indent': ['error', 2],
    'max-len': ['error', { code: 300 }],
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
    'object-curly-newline': ['error', { ImportDeclaration: 'never', ExportDeclaration: 'never' }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 10 }],
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'no-plusplus': ['off', { allowForLoopAfterthoughts: true }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/no-template-shadow': 'off',
    'vue/require-default-prop': 'off'
  }
}
