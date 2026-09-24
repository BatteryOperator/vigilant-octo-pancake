#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
mkdir -p dist/assets
for page in index about support privacy terms accessibility; do
  cp "$page.html" "dist/$page.html"
done
cp styles.css navigation.js dist/
cp assets/logo.png dist/assets/
rm -rf dist/assets/screenshots
mkdir -p dist/assets/screenshots
cp assets/screenshots/*.png dist/assets/screenshots/
printf 'Static site built in dist/\n'
