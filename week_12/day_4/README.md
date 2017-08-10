# Adv Github




## shorthands
git add --all
```sh
ga
```
git commit -m '
```sh
gc
```
which will then ask for a msg and a '
```sh
gc
quote>
```
```sh
gc
quote> initial commit'
```
which will return
```sh
➜  gitAdv git:(master) ✗ gc
quote> initial commmit'
[master 37da8bf] initial commmit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 nothing.js
```

change drive to dev
```sh
god
```
result
```sh
Switched to branch 'dev'
```
change drive to master
```sh
gom
```
result
```sh
Switched to branch 'master'
```

## Getting started
start by making a drive
```sh
mkdir gitAdv
```
move into drive
```sh
cd gitAdv
```
create git
```sh
git init
```
create change in git
```sh
touch web_app.js
```
stage change
```sh
git add --all
```
commit change
```sh
git commit -m "initial commit"
```
make new branch
```sh
git checkout -b dev
```
create a change
```sh
touch more_fun.js
```
stage change
```sh
git add --all
```
commit change
```sh
git commit -m "initial branch commit"
```
to move back to master
```sh
git checkout master
```
check for change
```sh
gst
```
and your should only see

```sh
➜  gitAdv git:(master) gst
On master
nothing to commit, working tree clean
```
show tree
```sh
git branch
```
```sh
➜  gitAdv git:(dev) git merge feature/cheeseburger  
```
---

to recover form a bad merge with git log
```sh
git log
```
get the cheeseburger back
```sh
commit 89d8dfdd935ba0d0dc44bc1cf7aa8e1cd3490db7
Author: FALLENau <reece.c.jones@gmail.com>
Date:   Thu Aug 10 11:01:07 2017 +0100

    CHEESE BURGER!!!!!
```



```sh
git revert -m 1 "git hash"
```



git hash
```sh
89d8dfdd935ba0d0dc44bc1cf7aa8e1cd3490db7
```

```sh
git revert 89d8dfdd935ba0d0dc44bc1cf7aa8e1cd3490db7
```



```sh
touch somethin_im_trying.js
```

stage
```sh
ga
```

stash
```sh
git stash
```

```sh
Saved working directory and index state WIP on dev: cf62b72 Revert "CHEESE BURGER!!!!!"
HEAD is now at cf62b72 Revert "CHEESE BURGER!!!!!"
➜  gitAdv git:(dev)
```

```sh
git stash pop
```

```sh
➜  gitAdv git:(dev) git stash pop
On branch dev
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   somethin_im_trying.js

Dropped refs/stash@{0} (7ab343bae4be587b142a097d5160cc73250882ee)
➜  gitAdv git:(dev) ✗
```
