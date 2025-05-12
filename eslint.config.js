import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'app',
  transcript: true,
  formatters: true,
  stylistc: {
    indent: 2,
    semi: true,
    quotes: 'double',
  },
}, {
  rules: {
    'no-console': ['warn'],
    'antfu/no-top-level-await': ['off'],
    'node/prefer-global/process': ['off'],
    'node/no-process-env': ['error'],
    'unicorn/filename-case': ['error', {
      cases: {
        camelCase: true,
        pascalCase: true,
        kebabCase: true,
        snakeCase: true,
      },
      ignore: ['README.md'],
    }],
  },
})
