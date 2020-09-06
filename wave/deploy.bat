cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/pingandthing/Wave.git master:gh-pages
cd ../
