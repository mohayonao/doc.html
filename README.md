# doc.html

> render documents dynamically from the project

## Demo

- [doc.html](http://mohayonao.github.io/doc.html/)

## Usage

- `git checkout -b gh-pages`
- copy [index.html](https://github.com/mohayonao/doc.html/blob/gh-pages/index.html) to your project root
- `git commit index.html -m 'add document'`
- `git push origin gh-pages`

## Flow

1. Read source files using fetch API
2. Extract markdown
3. Render html from markdown dynamically

## Customize

- change target files
  - modify [`docIndex`](https://github.com/mohayonao/doc.html/blob/gh-pages/index.html#L38)
- change program language
  - modify [`mdFromSourceCode`](https://github.com/mohayonao/doc.html/blob/gh-pages/index.html#L65)
- others
  - modify [`index.html`](https://github.com/mohayonao/doc.html/blob/gh-pages/index.html)

## Dependencies

- [chjj/marked](https://github.com/chjj/marked)
  - A markdown parser and compiler. Built for speed.
- [google-code-prettify](https://code.google.com/p/google-code-prettify/)
  - syntax highlighting of code snippets in a web page

## License

MIT
