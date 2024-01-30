module.exports = {
    root: true,
    extends: [
        'universe/native',
        'universe/shared/typescript-analysis',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        '@tanstack/query',
    ],
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.d.ts'],
            parserOptions: {
                project: './tsconfig.json',
            },
        },
    ],
}
