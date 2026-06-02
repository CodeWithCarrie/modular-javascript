<div align="center">
    <img src="public/images/cwc-logo-4-colors.svg" alt="Code with Carrie logo" width="50%" />
    <h1>Modular JavaScript: Building on the Fundamentals</h1>
    <p><em>Code examples (with demo videos!) and extra practice exercises for learners</em></p>
    <a href="http://www.codewithcarrie.com"><img src="https://img.shields.io/badge/by-CodeWithCarrie.com-b03454?style=for-the-badge" alt="badge linking to CodeWithCarrie's website" /></a>
    <img src="https://img.shields.io/badge/JavaScript-F0DB4F?style=for-the-badge&logo=javascript&logoColor=333333" alt="JavaScript" />
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=ffffff" alt="npm" />
    <img src="https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=npm&logoColor=ffffff" alt="npm" />
</div>

---

<div align="center">
    <a href="https://github.com/CodeWithCarrie/modular-javascript/blob/main/README.md#setup">Setup</a> &bull;
    <a href="https://github.com/CodeWithCarrie/modular-javascript/blob/main/README.md#1---classes">Classes</a> &bull;
    <a href="https://github.com/CodeWithCarrie/modular-javascript/blob/main/README.md#2---modules">Modules</a> &bull;
    <a href="https://github.com/CodeWithCarrie/modular-javascript/blob/main/README.md#3---unit-testing">Unit Testing</a>
</div>

---

### Welcome!

I've created a **completely new** volume of demos and practice exercises for anyone looking to pick up the basics of programming in the context of JavaScript. In a field increasingly dominated by AI code generation, it is essential to have a firm grasp on the fundamentals in order to plan ahead, compose crystal-clear prompts, and recognize errors and poorly-formed code. The only way to build muscle is to exercise it, and learning programming is no different!

> [!IMPORTANT]
> You need to deepen your problem-solving skills and core understanding of syntax and code composition independently _before_ you can integrate AI tools in your workflow and become a more efficient developer. My learning resources are designed to do just that!

---

### HOW TO FORK AND CLONE

#### CREATE YOUR OWN COPY

1. FORK it to your own GitHub account
1. COPY the link from your new repo on GitHub
1. CLONE it to your local machine. Example:

`git clone https://github.com/YourUsername/modular-javascript`

#### PRACTICE IN YOUR OWN BRANCHES

If you want to update your forked repository from my parent repository when I add or change things to mine in the future, there are instructions below this section.
It will go much easier if you don't ever change the code in `main`. Instead, do the following:

1. From `main`, use the command `git checkout -b new-branch-name` to create your own branch for practicing (example: `modules-practice`).
1. Practice as much as you'd like in your new branch, making commits as you add code.
1. When you are ready to work on something different in another new branch, use the command `git checkout main` to return to `main` and then you can repeat the two steps above.

### HOW TO UPDATE YOUR REPO AFTER I'VE UPDATED MINE

> [!WARNING]
> I am still adding new content regularly, so you will likely have to sync your forked repo with mine in order to pull that content into your own.

**Set the upstream link:**

1. On your local machine, make sure you are in the correct directory in the terminal.
1. Use the command `git remote add upstream https://github.com/CodeWithCarrie/modular-javascript`

You now have a direct link to my original repo!

Use the command `git remote -v` to verify that you have linked to both `origin` (your forked repo) and `upstream` (my original repo)

**Update your repo anytime I make changes in the future:**

1. On your local machine, make sure you are in the correct directory in the terminal.
1. If you have any uncommitted changes, **stage** and **commit** them.
1. Make sure you are in the branch you wish to update (e.g. `main`)
1. Use the command `git fetch upstream` so your local repo has knowledge of changes I made in my repo
1. Use the command `git rebase upstream/main` to sync your repo

**Check to see which branches you already have:**

1. You can use the command `git branch` anytime to see what local branches you have
1. The command `git branch -r` will show you branches that exist on GitHub (after you've fetched that knowledge)

---

## DEMOS & PRACTICE EXERCISES

If you are unfamiliar with the basics of JavaScript, I recommend starting with my [JavaScript Fundamentals Series](https://github.com/CodeWithCarrie/javascript-fundamentals) before continuing below.

Each topic will have at least one set of starter code and solution code corresponding to a video on the [@CodeWithCarrie](https://youtube.com/@CodeWithCarrie) YouTube channel, and most topics will include hands-on practice exercises as well. Use the links in the tables below for quick peeks at the code. You can fork your own copy of this repository for practice on your local machine. While individual links are available below for each video, you can also start with the [full playlist](). <!-- FIXME -->

> [!TIP]
> I recommend working through the demos and exercises in the sequence shown below.

Go forth and learn!

---

### SETUP

This collection of coding exercises focuses on JavaScript, Node and NPM modules, and Jest. While my JavaScript Fundamentals demos included Git commits, this collection and future collections will typically not cover that under the assumption that learners have developed the habit already.

> [!NOTE]
> Make sure you have npm and Node.js [installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) before continuing with any of the exercises below.

---

### 1 - Classes

| Topics                               | Code                                                                | Videos                               |    Length |
| ------------------------------------ | ------------------------------------------------------------------- | ------------------------------------ | --------: |
| Classes & Constructors               | [classes-constructors](/tutorials/01-classes/classes-constructors/) | [Demo](https://youtu.be/pYJbOCsvkeM) |      6:46 |
| Advanced Properties & Default Values | [advanced-properties](/tutorials/01-classes/advanced-properties/)   | [Demo](https://youtu.be/0kFiadYl-WQ) |      5:26 |
| Class Methods & Memory Scope         | [class-methods](/tutorials/01-classes/class-methods/)               | [Demo](https://youtu.be/za9U2GltNfo) |      5:57 |
| Inheritance Basics                   | [inheritance-basics](/tutorials/01-classes/inheritance-basics/)     | [Demo](https://youtu.be/0CV9VgptCKM) |      8:00 |
| Deep Inheritance                     | [deep-inheritance](/tutorials/01-classes/deep-inheritance/)         | [Demo](https://youtu.be/S3Q2nUiiDFE) |      6:07 |
| Polymorphism                         | [polymorphism](/tutorials/01-classes/polymorphism/)                 | [Demo](https://youtu.be/mY6wKCEpEQ8) |      5:10 |
|                                      |                                                                     | **TOTAL**                            | **37:26** |

---

### 2 - Modules

| Topics               | Code                                                                | Videos         | Length |
| -------------------- | ------------------------------------------------------------------- | -------------- | -----: |
| CommonJS Modules     | [commonjs-modules](/tutorials/02-modules/commonjs-modules/)         | [Demo]()       |        |
| ES Modules           | [es-modules](/tutorials/02-modules/es-modules/)                     | _Coming soon!_       |        |
| Node Core Modules    | [node-core-modules](/tutorials/02-modules/node-core-modules/)       | [Demo]()       |        |
| NPM Modules          | [npm-modules](/tutorials/02-modules/npm-modules/)                   | _Coming soon!_ |        |
| Modules with Classes | [modules-with-classes](/tutorials/02-modules/modules-with-classes/) | _Coming soon!_ |        |
|                      |                                                                     | **TOTAL**      |        |

---

### 3 - Unit Testing

_Coming soon!_

---

## ABOUT THE AUTHOR

### Caroline "Carrie" Jones

Front End Engineer and Lead Instructor at [LaunchCode](https://www.launchcode.org)

[@Carolista](https://github.com/Carolista) - [CodeWithCarrie.com](http://codewithcarrie.com) - [LinkedIn](https://www.linkedin.com/in/carolinerjones)
