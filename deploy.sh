#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# echo 'the-webmasters-agency.github.io' > CNAME
echo 'detech-motor-docs.thewebmasters.agency' > CNAME

git init
git add -A
git commit -m 'chore: deploy docs to GitHub'
git push -f git@github.com:the-webmasters-agency/user-guide.git master:gh-pages

cd -
