# trim-http

**Canonical URL:**  
[https://alexstevovich.com/r/trim-http-nodejs](https://alexstevovich.com/r/trim-http-nodejs)

<br>
Removes the http:// or https:// prefix from a URL string.
<br>

## Usage

```js
import trimHttp from 'trim-http';

console.log(trimHttp('https://alexstevovich.com'));
// → "alexstevovich.com"

console.log(trimHttp('http://example.org'));
// → "example.org"

console.log(trimHttp('ftp://example.org'));
// → "ftp://example.org" (unchanged)
```

## Installation

```sh
npm install trim-http
```

## License

Licensed under the [MIT License](https://opensource.org/licenses/MIT).
