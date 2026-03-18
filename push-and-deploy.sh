#!/bin/bash
set -e

echo "🚀 Pushing to GitHub..."
git remote set-url origin https://github.com/hesamhadadi/coffee-landing-framer.git
git push -u origin main --force

echo ""
echo "✅ Pushed to GitHub!"
echo ""
echo "🌐 Now go to: https://vercel.com/new"
echo "   → Import Git Repository"
echo "   → Select: hesamhadadi/coffee-landing-framer"
echo "   → Framework: Next.js (auto-detected)"
echo "   → Click Deploy ✨"
