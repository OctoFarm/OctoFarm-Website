#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
echo 'octofarm.net' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:octofarm-website/octofarm-website.git master:gh-pages
cd -
