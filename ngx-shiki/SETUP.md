# NgxShiki Setup Guide

This guide will help you set up, build, and publish the NgxShiki library.

## Prerequisites

- Node.js 18+
- npm 9+
- Angular CLI 18+

## Initial Setup

1. **Clone and Initialize**

   ```bash
   git clone <your-repo-url>
   cd ngx-shiki
   npm install
   ```

2. **Install Angular CLI globally** (if not already installed)

   ```bash
   npm install -g @angular/cli
   ```

## Development

### Building the Library

```bash
# Development build
npm run build

# Production build  
npm run build:prod
```

### Running the Demo

To test your component during development:

```bash
# Start the demo application
npm start
```

This will start a development server at `http://localhost:4200` with the demo application that showcases all the features.

### Testing

```bash
npm run test
```

## Publishing to npm

### 1. Prepare for Publishing

First, make sure you have an npm account and are logged in:

```bash
npm login
```

### 2. Update Version

Before publishing, update the version in `package.json`:

```json
{
  "version": "1.0.1"
}
```

### 3. Build and Publish

Option A: **Using the automated script** (recommended)

```bash
# Make scripts executable (Unix/Mac)
chmod +x scripts/build-and-pack.sh
chmod +x scripts/publish.sh

# Build the library
./scripts/build-and-pack.sh

# Publish to npm
./scripts/publish.sh
```

Option B: **Manual process**

```bash
# Build production version
npm run build:prod

# Navigate to dist directory
cd dist/ngx-shiki

# Publish
npm publish --access public
```

### 4. Verify Publication

After successful publication, verify at:

- <https://www.npmjs.com/package/ngx-shiki>

## Local Testing

To test the package locally before publishing:

```bash
# Build and pack
npm run build:prod
cd dist/ngx-shiki
npm pack
cd ../..

# Install in a test project
npm install dist/ngx-shiki/ngx-shiki-*.tgz
```

## Project Structure

```
ngx-shiki/
├── projects/
│   └── ngx-shiki/          # Library source code
│       ├── src/
│       │   ├── lib/        # Component, service, types
│       │   └── public-api.ts
│       ├── ng-package.json
│       └── tsconfig.*.json
├── src/                    # Demo application
├── scripts/               # Build and publish scripts
├── dist/                  # Built library (generated)
├── package.json
├── angular.json
└── README.md
```

## Key Files Explained

- **`projects/ngx-shiki/src/lib/ngx-shiki.component.ts`**: Main component
- **`projects/ngx-shiki/src/lib/ngx-shiki.service.ts`**: Shiki integration service
- **`projects/ngx-shiki/src/lib/ngx-shiki.types.ts`**: TypeScript interfaces and types
- **`projects/ngx-shiki/src/public-api.ts`**: Public API exports
- **`projects/ngx-shiki/ng-package.json`**: Library build configuration

## Customization

### Adding New Languages

Edit `projects/ngx-shiki/src/lib/ngx-shiki.types.ts`:

```typescript
export const SUPPORTED_LANGUAGES = [
  // ... existing languages
  'your-new-language'
] as const;
```

Then update the service to load the language:

```typescript
// In ngx-shiki.service.ts
langs: [
  // ... existing languages
  'your-new-language'
]
```

### Adding New Themes

Similar process in the types file and service:

```typescript
export const SUPPORTED_THEMES: NgxShikiTheme[] = [
  // ... existing themes
  { name: 'your-theme', displayName: 'Your Theme Name' }
];
```

## Troubleshooting

### Common Issues

1. **Build Errors**: Make sure all dependencies are installed and Angular CLI is updated
2. **Shiki Loading Issues**: Check that all required languages and themes are included
3. **Publishing Errors**: Verify npm authentication and package version

### Getting Help

- Check the [Shiki documentation](https://shiki.style/)
- Review [Angular Library Guide](https://angular.io/guide/creating-libraries)
- Open an issue in the repository

## Release Checklist

Before each release:

- [ ] Update version in `package.json`
- [ ] Update `CHANGELOG.md`
- [ ] Test the demo application
- [ ] Run all tests
- [ ] Build the library successfully
- [ ] Test the built package locally
- [ ] Publish to npm
- [ ] Create GitHub release
- [ ] Update documentation if needed


npm install
npm install shiki --save
