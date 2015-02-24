# Westwing Prototyping Blueprint

This is a simple blueprint to kick off mockups and prototypes at Westwing.

## How it works

The basic file structure for this project looks like this.

```
.
├── build
│   ├── styleguide
│   │   └── css
│   └── www
│       ├── css
│       └── js
└── src
    ├── js
    ├── sass
    │   ├── ...
    │   ├── modules
    │   ├── styleguide
    │   ├── ...
    ├── site
    │   ├── content
    │   └── templates
    │       ├── data
    │       ├── layouts
    │       └── partials
    └── styleguide
```

`build/styleguide/` contains a styleguide which is generated from hologram source files (`src/styleguide`).

`build/ww` contains the actual prototype and is generated from scss (`src/site`).

JavaScript and CSS are mainly shared (`src/js`) and (`src/sass`).

## Quickstart

1. Install [hologram](https://github.com/trulia/hologram).
2. Install node packages.
3. Run `grunt`. Files will be in build directory

## Creating Modules

```
└── src
    ├── js
    ├── sass
    │   ├── ...
    │   ├── modules
    │   ├── styleguide            (1b) Create partial css
    │   │                         (3)  If final, document your css
    │   ├── ...
    ├── site
    │   ├── content               (2)  Render partial in site and test
    │   └── templates
    │       ├── data
    │       ├── layouts
    │       └── partials          (1a) Create partial markup
    └── styleguide
```


# Hologram Task

This task requires you to have Ruby and Hologram installed. 
If you're on OS X or Linux you probably already have Ruby installed; test with `ruby -v` in your terminal. 
When you've confirmed you have Ruby installed, run `gem install hologram` to install hologram.


# Todo

- Refactor styleguide classes from hologram. I.e. in h1 tags
- Right now CSS, JS and Markup are scattered across the whole project (which is more or less the traditional approach. Though jumping slows down development process
- It would be nice if one would not be forced to write redundant Markup in CSS doc.
--> ReactJS can solve all these problems (and is supported).

## Bugs

- block order: To order blocks @see https://github.com/trulia/hologram/issues/69