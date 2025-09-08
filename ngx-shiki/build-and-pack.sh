#!/bin/bash

# Build and pack script for ngx-shiki library

set -e

echo "🔧 Installing dependencies..."
npm install

echo "🏗️  Building the library..."
npm run build:prod

echo "📦 Copying additional files to dist..."
cp README.md dist/ngx-shiki/
cp LICENSE dist/ngx-shiki/ 2>/dev/null || echo "⚠️  LICENSE file not found, skipping..."

echo "📋 Creating package..."
cd dist/ngx-shiki
npm pack
cd ../..

echo "✅ Build completed! Package is ready in dist/ngx-shiki/"
echo "📁 Package file: $(ls dist/ngx-shiki/*.tgz)"

echo ""
echo "🚀 To publish to npm:"
echo "   cd dist/ngx-shiki && npm publish --access public"
echo ""
echo "🧪 To test locally:"
echo "   npm install dist/ngx-shiki/ngx-shiki-*.tgz"
