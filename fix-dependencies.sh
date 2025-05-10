#!/bin/bash
# This script helps install the necessary dependencies in the correct directory
cd $(dirname "$0")

# Clean up and reinstall
rm -rf .next
rm -rf node_modules/.cache
npm uninstall tailwindcss-animate
npm install tailwindcss-animate

echo "Dependencies fixed. You can now run ./run-dev.sh to start the server." 