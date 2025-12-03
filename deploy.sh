#!/bin/bash

cd /var/www/demo_web || exit 1

echo "=== Pulling latest code ==="
git fetch origin main
git reset --hard origin/main

echo "=== Cleaning old build ==="
rm -rf out .next

echo "=== Installing deps ==="
npm install

echo "=== Building static export ==="
npm run build

echo "=== Fixing permissions ==="
chown -R www-data:www-data /var/www/demo_web
chmod -R 755 /var/www/demo_web

echo "=== Reloading NGINX ==="
systemctl reload nginx

echo "=== Deploy complete ==="

