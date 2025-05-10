#!/bin/bash
# This script helps deploy the Next.js app to Vercel from the correct directory
cd $(dirname "$0")

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Vercel CLI is not installed. Installing now..."
    npm install -g vercel
fi

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --prod

echo "Deployment complete. Check the URL above to access your site." 