import antfu from '@antfu/eslint-config'
import prettier from 'eslint-config-prettier'
import tseslint from '@typescript-eslint/eslint-plugin'
import { globalIgnores } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'; 

export default [
  globalIgnores(['dist']),
  {
    files: ['*/*.{ts,tsx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'import': importPlugin, 
    },
    settings: { 
      'import/resolver': {
        typescript: {}, 
      },
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      ...antfu(),
      'plugin:prettier/recommended',
      'plugin:import/recommended', 
      'plugin:import/typescript', 
    ],
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'react/react-in-jsx-scope': 'off',
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    
    },
  },
];
