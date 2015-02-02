# Westwing Prototyping Blueprint

This is a simple blueprint to kick off mockups and prototypes at Westwing.

## How it works

The basic file structure for this project looks like this.

```bat
├── build
│   ├── styleguide
│   │   └── css
│   └── www
│       └── css
└── src
    ├── code_example_templates
    ├── doc_assets
    └── sass
        └── main.scss
        └── styleguide.scss
```

`build/styleguide/` contains a styleguide which is generated from hologram source files (`src/code_example_templates/`, 
`src/doc_assets/`) and scss (`src/styleguide.scss`,`src/main.scss`).

`build/ww` contains the actual prototype and is generated from scss (`src/main.scss`). Static files are
currently added directly in `build/www` folder. However future versions should have basic static file generator support.

## Quickstart

1. Install [hologram][https://github.com/trulia/hologram].
2. Install node packages.
3. Run `grunt`. Files will be in build directory

## Dependencies

- [grunt][https://github.com/gruntjs/grunt]
- [grunt-sass][https://github.com/sindresorhus/grunt-sass]
- [grunt-hologram][https://github.com/jchild3rs/grunt-hologram/]


# Hologram Task

This task requires you to have Ruby and Hologram installed. 
If you're on OS X or Linux you probably already have Ruby installed; test with `ruby -v` in your terminal. 
When you've confirmed you have Ruby installed, run `gem install hologram` to install hologram.


# Todo

- Refactor styleguide classes from hologram. I.e. in h1 tags

## Bugs

- block order: To order blocks @see https://github.com/trulia/hologram/issues/69