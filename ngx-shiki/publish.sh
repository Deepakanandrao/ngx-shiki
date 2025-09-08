#!/bin/bash

# Publish script for ngx-shiki library

set -e

echo "🔍 Checking npm authentication..."
if ! npm whoami > /dev/null 2>&1; then
    echo "❌ You are not logged in to npm. Please run 'npm login' first."
    exit 1
fi

echo "👤 Publishing as: $(npm whoami)"

# Check if dist directory exists
if [ ! -d "dist/ngx-shiki" ]; then
    echo "❌ dist/ngx-shiki directory not found. Please run the build script first."
    echo "   npm run build:prod"
    exit 1
fi

# Navigate to dist directory
cd dist/ngx-shiki

# Check package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found in dist/ngx-shiki"
    exit 1
fi

# Get package name and version
PACKAGE_NAME=$(node -p "require('./package.json').name")
PACKAGE_VERSION=$(node -p "require('./package.json').version")

echo "📦 Package: $PACKAGE_NAME@$PACKAGE_VERSION"

# Check if this version already exists
if npm view "$PACKAGE_NAME@$PACKAGE_VERSION" version > /dev/null 2>&1; then
    echo "❌ Version $PACKAGE_VERSION already exists on npm."
    echo "   Please update the version in package.json and rebuild."
    exit 1
fi

echo "🚀 Publishing to npm..."
npm publish --access public

echo "✅ Successfully published $PACKAGE_NAME@$PACKAGE_VERSION to npm!"
echo "📖 You can now install it with: npm install $PACKAGE_NAME"

# Return to root directory
cd ../..

echo ""
echo "🔗 Package URL: https://www.npmjs.com/package/$PACKAGE_NAME"
