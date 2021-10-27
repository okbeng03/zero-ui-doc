# checkout to the gh-pages branch
git checkout gh-pages
cnpm install && npm run docs:build

# pull the latest updates
git pull origin gh-pages --rebase

# copy the static site files into the current directory.
cp -R docs/.vuepress/* .

# remove 'node_modules' and '_book' directory
git clean -fx docs/.vuepress

# add all files
git add .

# commit
git commit -a -m "Update docs"

# push to the origin
git push origin gh-pages

# checkout to the master branch
git checkout master
