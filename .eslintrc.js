module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['standard', 'prettier'],
  plugin: ['prettie'],
  parserOptions: {
    ecmaVersion: '12',
    sourceType: 'module'
  },
  rules: {
    camelcase:'off',
    'prettier/prettier':'error'
  }
}
