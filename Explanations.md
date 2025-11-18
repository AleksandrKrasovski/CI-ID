# CI-CD (`C`ontiniuosly `I`ntegration & `C`ontiniuosly `D`elivery)
## First actions
* sources
  * [youtube](https://www.youtube.com/watch?v=ANj7qUgzNq4&t=527s)
    * [tg](https://t.me/ulbi_tv/79)
      * [github](https://github.com/utimur/ci-cd?tab=readme-ov-file#)
        * [github link](https://github.com/utimur/ci-cd.git)
* copy the project
  * [https variant](https://github.com/utimur/ci-cd.git)
* create `.oldFiles` folder
  * to `.oldFiles`
    * move `package-lock.json`
    * copy `package.json`
* `git init`
* packages installation
  * in `package.json`
    * replace `": "^` `": "`
  * `npm install` with a lot of `WARN deprecated`
  * my commit `2bafb7d` (`HEAD` -> `master`) `packages installation`
    ```bash
    2bafb7d (HEAD -> master) packages installation # UTimur comments below:
      2cdabeb (origin/master, origin/HEAD) change counter
      57ac24a add counter
      4da1f25 Merge pull request #1 from utimur/feature/division
      ca7547b (origin/feature/division) fix minus error
      6f8ec43 add division
      0294b03 change yml
      ce607e3 add yml
      04c3bfd initial
    ``` 
* Create a new branch (named `ak_2025`) of the project in GitHub
  * `AI Overview`
    * [source](/Users/aliv/Documents/0_Docs/0_Job/Coding/GitHub/github/github.md)
    * Создать новую ветку в GitHub можно через 
      * командную строку или 
      * с помощью графического интерфейса клиента, например, в GitHub Desktop, Visual Studio Code или 
      * на самом сайте GitHub. 
    * `Способ 1`: Через командную строку
      * 1.1. Перейдите в каталог проекта:
      ```bash
      cd /path/to/your/repo
      ```
      * 1.2. Создайте новую ветку и переключитесь на неё. Например, если вы на основной ветке (например, main):
        * Вариант 1: с командой `checkout`
          * NOTE: [Skyeng](https://skyeng.ru/it-industry/it/kak-sozdat-novuyu-vetku-v-github-poshagovoye-rukovodstvo/) указывает,     что эта команда создаст и сразу переключит вас на новую ветку
          ```bash
          git checkout -b имя-новой-ветки
          ```
        * Вариант 2: с командой `switch` (рекомендуется в новых версиях Git):
          ```bash
          git switch -c имя-новой-ветки
          ```
          * NOTE: Git отмечает, что флаг -c означает "create".
      * 1.3. Отправьте новую ветку на GitHub:
        ```bash
        git push -u origin имя-новой-ветки
        ```
        * NOTE: [Skyeng](https://skyeng.ru/it-industry/it/kak-sozdat-novuyu-vetku-v-github-poshagovoye-rukovodstvo/) подчеркивает, что команда `git push -u` связывает локальную и удаленную ветки.
  * `git switch -c ak_2025`
    ```bash
    git log --oneline                    
    2bafb7d (HEAD -> ak_2025, master) packages installation # `UTimur` comments and `main` branch are below: 
      2cdabeb (origin/master, origin/HEAD) change counter
      57ac24a add counter
      4da1f25 Merge pull request #1 from utimur/feature/division
      ca7547b (origin/feature/division) fix minus error
      6f8ec43 add division
      0294b03 change yml
      ce607e3 add yml
      04c3bfd initial
    ```
  * 🟥 `git push -u origin ak_2025`
    ```bash
    remote: Permission to utimur/ci-cd.git denied to AleksandrKrasovski.
    fatal: unable to access 'https://github.com/utimur/ci-cd.git/': The requested URL returned error: 403
    ```
* detech a local project rero from `github`
  * `AI Overview`
    * Чтобы отсоединить локальный репозиторий от GitHub, нужно удалить удалённую связь с помощью команды git remote rm <remote-name> (обычно origin) или просто удалить скрытую папку .git в корне репозитория, чтобы полностью отключить его от Git. Первый метод удалит только связь с удалённым репозиторием, а второй — полностью превратит локальную папку в обычный каталог. 
    * Вариант 1: Удаление удалённой связи
      * Этот способ отключает локальный репозиторий от удалённого, но сохраняет всю историю и файлы локально.
      * Откройте терминал в папке вашего локального репозитория.
      * Выполните команду, чтобы посмотреть текущие удалённые репозитории:
        ```bash
        git remote -v
        ```
      * Удалите удалённую ссылку. Обычно она называется origin. Введите команду:
        ```bash
        git remote rm origin
        ```
        * NOTE: Если удалённый репозиторий называется иначе, замените origin на нужное имя.
    * Вариант 2: Полное удаление Git-репозитория
      * Этот способ удаляет всю систему управления версиями из папки, превращая её в обычный каталог без истории Git.
      * Найдите папку вашего локального репозитория на компьютере.
      * Включите показ скрытых файлов (`command + shift + .`) или в настройках проводника, чтобы увидеть папку .git.
      * Удалите папку .git, кликнув по ней правой кнопкой мыши и выбрав "Удалить".
  * use var 1
    * remote repo checking
      ```bash
      git remote -v       
      origin  https://github.com/utimur/ci-cd.git (fetch)
      origin  https://github.com/utimur/ci-cd.git (push)
      ```
    * remove the remote repos
      ```bash
      git remote rm origin
      ```
    * remote repos checking
      ```bash
      git remote -v
      ```
    * local repo checking
      ```bash     
      git log --oneline         
      2bafb7d (HEAD -> ak_2025, master) packages installation
      2cdabeb change counter # UTimur comments below:
      57ac24a add counter
      4da1f25 Merge pull request #1 from utimur/feature/division
      ca7547b fix minus error
      6f8ec43 add division
      0294b03 change yml
      ce607e3 add yml
      04c3bfd initial
      ```  
* A new github repo (named CI-DI)
  * [source](https://purpleschool.ru/blog/kak-zagruzit-svoy-pervyy-proekt-na-github-poshagovoe-rukovodstvo-dlya-nachinayushchih)
  * Войдите в свой аккаунт на GitHub.
  * Нажмите на "+" в правом верхнем углу и выберите "New repository".
  * Введите имя репозитория (желательно такое же, как у папки на вашем компьютере).
  * Добавьте описание проекта (необязательно, но рекомендуется).
  * Выберите "Public" (если хотите, чтобы ваш проект был доступен всем) или "Private" (если хотите ограничить доступ).
  * Не ставьте галочку возле "Initialize this repository with a README" (мы уже создали README локально).
  * Нажмите "Create repository".
* push local project to the new repo
  * NOTE: [push an existing repository from the command line](https://github.com/AleksandrKrasovski/CI-ID)
    ```bash
    git remote add origin git@github.com:AleksandrKrasovski/CI-ID.git # git remote -v
    git branch -M main # the `ak_2025` branch is named as `main`
    git push -u origin main
    ```
  * add project to remote repo
    ```bush
    git remote add origin git@github.com:AleksandrKrasovski/CI-ID.git
    ```
  * remote repo checking 
    ```bush
    git remote -v
    origin  git@github.com:AleksandrKrasovski/CI-ID.git (fetch)
    origin  git@github.com:AleksandrKrasovski/CI-ID.git (push)
    ```
  * go `main` to `HEAD`
    ```bash
    git branch -M main
    ```
  * check log: the `ak_2025` branch is named as `main`
    ```bash
    git log --oneline
    2bafb7d (HEAD -> main, master) packages installation
    2cdabeb change counter
    # ...
    ```
  * 🍏 push project
    ```bash
    git push -u origin main
    ```
  * the project has 2 contributors
    * @utimur `utimur TIm`
    * @AleksandrKrasovski `AleksandrKrasovski Aleksandr`
* 🍏 Run tests
  * 🍏 `npm run test:unit`
    * `No changes` since last commit
      ```bash
      No tests found related to files changed since last commit.
      Press (a) to run all tests, or run Jest with (--watchAll).
      Watch Usage
       › Press a to run all tests.
       › Press f to run only failed tests.
       › Press q to quit watch mode.
       › Press p to filter by a filename regex pattern.
       › Press t to filter by a test name regex pattern.
       › Press Enter to trigger a test run.
      ```
    * Press `a` to run all tests
      ```bash
      (PASS  src/helpers/sum/sum.test.js)
      (PASS  src/helpers/minus/minus.test.js)
      Test Suites: (2 passed), 2 total
      Tests:       (4 passed), 4 total
      Snapshots:   0 total
      Time:        0.983 s, estimated 1 s
      Ran all test suites
      ```
  * 🍏 `npm run test:e2e`
## Creating first workflow for the case `on: push` project
* [source](https://docs.github.com/en/actions/get-started/quickstart#creating-your-first-workflow)
* create folders and file
  * `.github`/
    * `workflows`/
      * `github-actions-demo.yml`
        * the `yml` extension can be named as `.yaml` too
        * here `yml` or `yaml` is 
          * not the 
            * [YAML (Yet Another Multicolumn Layout) CSS framework](https://en.wikipedia.org/wiki/YAML_(framework))
              * [yaml.de](http://www.yaml.de)
            * [YML (Yandex Market Language)](https://yandex.ru/support/marketplace/ru/assortment/auto/yml)
          * [YAML Ain't Markup Language™](https://en.wikipedia.org/wiki/YAML) is a programminglanguage for `config file`s
            * [yaml.org](https://yaml.org)
          * the `ain't` is the `to be not`, for example
            * I `am not` -> I `ain't`
            * you `are not` -> you `ain't`
* `github-actions-demo.yml` 
  * the one is removed to `oldFiles` folder
  * the another is taken from `github` to `.github`/`workflows`/
    * сopy the existing code into the `github-actions-demo.yml`
      * `Now`
        * you can just copypaste the contents
        * At this stage you don't need to understand the details of this code. 
      * `After`
        * you can learn about this in
          * [Workflows](https://docs.github.com/en/actions/using-workflows/ about-workflows#understanding-the-workflow-file)
          * [GitHub Actions Contexts](https://docs.github.com/en/actions/learn-github-actions/contexts)
          * [Understand Github Actions](https://docs.github.com/en/actions/get-started/understand-github-actions)
* commit [c4d9b38] `github-actions-demo is taken from github`
* `git push origin main`
* 🍏 look `github`/`actions`
  * [1 workflow run](https://github.com/AleksandrKrasovski/CI-ID/actions)
    * named as `github-actions-demo`
    * like .github/workflows/`github-actions-demo`.yml
  * press 
    * workflow ->`AleksandrKrasovski is testing out GitHub Actions 🚀`
      * jobs -> `Explore-GitHub-Actions`
        * look `runs` of testing `scripts`
* Change the workflow
  * in .github/workflows/`github-actions-demo.yml` add 
    * `strategy` and 
    * new `steps` that are included all `scripts` from `package.json`
    ```yaml
    //...
    jobs:
      Explore-GitHub-Actions:
        //...
        strategy:
          matrix:
            node-version: [17.x]
        steps:
          - user: actions/checkout@v3
          - name: Staring Node.js ${{ matrix.node-version }}
            uses: actions/setup-node@v3
            with:
              node-version: ${{ matrix.node-version }}
          - name: install modules
            run: npm install
          - name: build project
            run: npm run build
          - name: build storybook
            run: npm run build:storybook
          - name: unit test
            run: npm run test:unit
          - name: e2e test
            run: npm run test:e2e
          - name: lint code
            run: npm run lint
    ```
  * `git commit -m "change the .yml"`
  * `git push origin main`
* 🍏 look `github`/`actions`
  * [2 workflows run](https://github.com/AleksandrKrasovski/CI-ID/actions)
  * press 
    * the new workflow ->`AleksandrKrasovski is testing out GitHubActions  🚀`
      * jobs -> `Explore-GitHub-Actions`
        * look `runs` of testing `scripts`
## Creating the workflow for the case `on: pull request` project
* in `.github/workflows/github-actions-demo.yml`
  * it was
    ```yaml
    # ...
    on: [push] # the jobs are tested in any case of push
    jobs:
    # ...
    ```
  * it is changed to
    ```yaml
    # ...
    on: 
      push:
        branches: [ master ] # the jobs are tested only if push to `master`
      pull_request:
        branches: [ master ] # the jobs are tested only if push to `master`
    jobs:
    # ...
    ```
* `git commit -m "make on: push & pull_request: branches: [master] in .yml"`   
## Make: `new branch`, `mistake`, `push`, `pull request`
* `new branch`
  * branch `feature/division`
    ```bash
    git checkout -b feature/division
    Switched to a new branch 'feature/division'
    ```
    * the project is on `feature/division` branch
* `mistake`
  * legenda
    * create a new feature in src/helpers/`division/division.js`
    * make a typo in src/helpers/minus/`minus.js`
      ```js
      //export const minus = (a, b) => a - b;
        export const minus = (a, b) => a / b;
      ``` 
      * NOTE: the src/helpers/minus/`minus.test.js` will fail
* `push`
  * `git commit -m "legenda: add division.js; make a typo in minus.js"`
  * git push origin `feature/division`
    * NOTE: git push origin `branchName`
* 🔴 `pull request`
  * `https://github.com/AleksandrKrasovski/CI-ID`
    * Press `Compare and Pull requests`
      * Press `New pull request`
        * `Attention`: Able to merge. These branches can be automatically merged.
        * Add a title
        * Add a description
        * Press `Create pull request`
  * 🔴 github `tests` do not start
  * 🍏 but `npm run test:unit` catches the bug
    * 🍏 `No changes` since last commit
      ```bash
      No tests found related to files changed since last commit.
      Press (a) to run all tests, or run Jest with (--watchAll).
      Watch Usage
        › Press a to run all tests.
        › Press f to run only failed tests.
        › Press q to quit watch mode.
        › Press p to filter by a filename regex pattern.
        › Press t to filter by a test name regex pattern.
        › Press Enter to trigger a test run.
      ```
    * 🔴 Press `a` to run all tests
        ```bash
        🍏 PASS  src/helpers/sum/sum.test.js
        🔴 FAIL  src/helpers/minus/minus.test.js
        ```
* 🍏 `pull request`
  * in .github/workflows/`github-actions-demo.yml` replace `master` by `main`
    * it was
      ```yaml
      # ...
      on: 
        push:
          branches: [ master ]
        pull_request:
          branches: [ master ]
      jobs:
      # ...
      ```
    * it is changed to
      ```yaml
      # ...
      on: 
        push:
          branches: [ main ]
        pull_request:
          branches: [ main ]
      jobs:
      # ...
      ```
  * `git commit -m "master is replace by main"`
  * `git push origin main`
  * 🍏 `github.com/.../CI-ID/actions/runs/...` catches the bug
  * correct the typo in src/helpers/minus/`minus.js`
      ```js
      export const minus = (a, b) => a - b;
      ```
  * `git commit -m "correct the typo in minus.js" `
  * `git push origin main`
  * 🍏 `github.com/.../CI-ID/actions/runs/...`
* 