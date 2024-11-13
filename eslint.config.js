import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-config-prettier'

export default [
    {
        ignores: [
            'dist/**',
            'build/**',
            'node_modules/**',
            'coverage/**',
            '.git/**',
            'public/**',
            '.prettierrc',
            'package.json',
            'package-lock.json',
            'pnpm-lock.yaml',
            '*.log',
            '.DS_Store'
        ]
    },

    // Base ESLint config with browser environment
    {
        ...js.configs.recommended,
        languageOptions: {
            globals: {
                document: 'readonly',
                window: 'readonly',
                navigator: 'readonly',
                history: 'readonly',
                location: 'readonly'
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        }
    },

    prettier,

    // TypeScript config
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                project: './tsconfig.json'
            }
        },
        plugins: {
            '@typescript-eslint': typescript
        },
        rules: {
            ...typescript.configs.recommended.rules
        }
    },

    // React config
    {
        files: ['**/*.jsx', '**/*.tsx'],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        plugins: {
            react,
            'react-hooks': reactHooks
        },
        rules: {
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off'
        },
        settings: {
            react: {
                version: 'detect'
            }
        }
    },

    // Global rules
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'warn'
        }
    }
]
