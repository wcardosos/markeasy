# markeasy

Transform markdown content into HTML content easily.

# Overview

Your markdown content easily transformed into HTML content.

## Features
- transform raw markdown content into HTML.

# Installation
This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). Install with [npm](https://npmjs.com/):
```bash
npm install markeasy
```

# Usage
```javascript
import { transformMarkdownToHtml} from 'markshare'

transformMarkdownToHtml('# Deu bom').then((result) => console.log(result.html))
```