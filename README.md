# trim-http

**Canonical URL:**  
[https://alexstevovich.com/a/trim-http-nodejs](https://alexstevovich.com/a/trim-http-nodejs)

**Software URL:**  
[https://midnightcitylights.com/software/trim-http-nodejs](https://midnightcitylights.com/software/trim-http-nodejs)

Removes the http:// or https:// prefix from a URL string.

---

## Installation

```sh
npm install trim-http
```

## Example

```js
import trimHttp from 'trim-http';

console.log(trimHttp('https://alexstevovich.com'));
// → "alexstevovich.com"

console.log(trimHttp('http://example.org'));
// → "example.org"

console.log(trimHttp('ftp://example.org'));
// → "ftp://example.org" (unchanged)
```

## License

Licensed under the [MIT License](https://opensource.org/licenses/MIT).
