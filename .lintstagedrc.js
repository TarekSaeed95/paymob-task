module.exports = {
  '*.{ts,tsx}': [/* () => 'tsc -p tsconfig.json', */ 'eslint --fix'],
  '*.{js,jsx}': 'eslint --fix',
  '*.{css,scss,html,json,md,mdx}': 'prettier --write',
}
