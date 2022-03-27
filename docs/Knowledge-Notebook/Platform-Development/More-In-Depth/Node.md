---
hide:
    - navigation

---

# Node.js

Is a [JavaScript](/Knowledge-Notebook/Programming-Languages/Languages/JavaScript) V8 run-time environment (Core of Chromium-based browsers) for running JavaScript outside of a browser.

[:octicons-arrow-left-24: Return to Platform Development](/Knowledge-Notebook/Platform-Development/)

---

## Resources

- [Node.js Docs](https://nodejs.org/en/docs/)
- [Nodejs.dev Learn](https://nodejs.dev/learn)
- [NVM](https://github.com/nvm-sh/nvm)
- [NPM Docs](https://docs.npmjs.com/)

## Getting Started

Installation can be done several ways, but via `nvm` is recommended

- [NVM Install](https://github.com/nvm-sh/nvm#installing-and-updating)
``` bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm`
nvm install node
nvm use node
```
- [Download](https://nodejs.dev/download/)
- [Package Manager](https://nodejs.dev/download/package-manager/)

To then run a main application file, use
```
node app.js
```

Instead of explicitly telling the OS to use `node`, embedding a "shebang" line into the a JavaScript file tells the OS which interpreter to use for running the script.
`app.js`
``` js
#!/usr/bin/env node

// code
```

If automatic restarting the application after file changes is wanted, then install `nodemon`
``` bash
npm i -g nodemon # Globally
npm i --save-dev nodemon # Development-Dependency
```
<!-- !!! note ""
    Note: npm needs to be installed? -->

Node is often used as a server, here's a simple example
``` js
// app.js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
<!-- 
## Stopping

++ctrl+c++

To immediately force the process to terminate with code.
``` js
process.exit(1)
```
However with servers, there maybe pending or running requests.
``` js
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})
```
Then in another file, calling the pid `SIGTERM` will terminal gracefully.
``` js
process.kill(process.pid, 'SIGTERM')

``` -->
