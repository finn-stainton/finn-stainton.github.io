# PBD/Web Platforms

??? "Learning Outcomes:"

    1. Design and Implement a simple web application. [Usage]
    2. Describe the constraints that the web puts on developers. [Familiarity]
    3. Compare and contrast web programming with general purpose programming. [Assessment]
    4. Describe the differences between Software-as-a-Service and traditional software products. [Familiarity]
    5. Discuss how web standards impact software development. [Familiarity]
    6. Review an existing web application against a current web standard. [Assessment]

## Web Languages and Frameworks

### HTML5

### JavaScript



!!! cite "Resources/ Bib."

- [Microsoft JavaScript Docs](https://docs.microsoft.com/en-us/javascript/)
- [Mozilla JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

**Getting Started**


[More In Depth](More-In-Depth/JavaScript.md)

---

### TypeScript

Is a strongly typed language developed by Microsoft

!!! cite "Resources/ Bib."

- [Docs](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TSConfig Reference](https://www.typescriptlang.org/tsconfig)
- [Playground](https://www.typescriptlang.org/play)
- [Cheatsheets](https://www.typescriptlang.org/cheatsheets)
- [Type Search](https://www.typescriptlang.org/dt/search)

**Getting Started**

Install with npm
```
npm install -g typescript
```

To compile a `.ts` file to `.js` use `tsc` util.
```
tsc file.ts
```

Instead of having to compile each file, we can create a tsconfig options file
```
echo '{
    "compilerOptions":  {
        "target":  "esnext",
        "watch":  "true",
        "lib":  ["dom", "es2017"]
    }
}' > tsconfig.json
```



```
npm i -D @types/lodash
```

**Noteworthy**

Unlike JavaScript, TypeScript (as hinted in the name) has **Types**.

``` typescript
let variable = 20 // Without type annotations, inferred as a 'number'
variable = '23' // Results in an error as not assignable to type 'number'

let foo: string = '23' // With type annotations

let ahh: any = 20 // 'any' type allows any data type to be written over the variable. 
ahh = '21'
```

[![Control Flow Analysis Cheatsheet](https://www.typescriptlang.org/static/TypeScript%20Control%20Flow%20Analysis-8a549253ad8470850b77c4c5c351d457.png)](https://www.typescriptlang.org/static/TypeScript%20Control%20Flow%20Analysis-8a549253ad8470850b77c4c5c351d457.png)

[![Interfaces Cheatsheet](https://www.typescriptlang.org/static/TypeScript%20Interfaces-34f1ad12132fb463bd1dfe5b85c5b2e6.png)](https://www.typescriptlang.org/static/TypeScript%20Interfaces-34f1ad12132fb463bd1dfe5b85c5b2e6.png)

[![Class Cheatsheet](https://www.typescriptlang.org/static/TypeScript%20Classes-83cc6f8e42ba2002d5e2c04221fa78f9.png)](https://www.typescriptlang.org/static/TypeScript%20Classes-83cc6f8e42ba2002d5e2c04221fa78f9.png)

[![Types Cheatsheet](https://www.typescriptlang.org/static/TypeScript%20Types-4cbf7b9d45dc0ec8d18c6c7a0c516114.png)](https://www.typescriptlang.org/static/TypeScript%20Types-4cbf7b9d45dc0ec8d18c6c7a0c516114.png)

---

### Node.js

Is a [JavaScript](#javascript) V8 run-time environment (Core of Chromium-based browsers) for running JavaScript outside of a browser.

!!! cite "Resources/ Bib."

- [Node.js Docs](https://nodejs.org/en/docs/)
- [Nodejs.dev Learn](https://nodejs.dev/learn)
- [NVM](https://github.com/nvm-sh/nvm)
- [NPM Docs](https://docs.npmjs.com/)

**Getting Started**

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

**Noteworthy**

---

### Express.js

!!! cite "Resources/ Bib."

**Getting Started**

**Noteworthy**

---

### React.js

!!! cite "Resources/ Bib."

**Getting Started**

**Noteworthy**

---

### Nest.js

!!! cite "Resources/ Bib."

**Getting Started**

**Noteworthy**

---

### Next.js

!!! cite "Resources/ Bib."

**Getting Started**

**Noteworthy**

### Remix.js

!!! cite "Resources/ Bib."

**Getting Started**

**Noteworthy**

---

### PHP

!!! cite "Resources/ Bib."

**Getting Started**

**Noteworthy**

---

### CSS

!!! cite "Resources/ Bib."

**Getting Started**

**Noteworthy**

---

### Tailwind.css

!!! cite "Resources/ Bib."

**Getting Started**

**Noteworthy**

---

## Web platform constraints

## Software as a Service (SaaS)

## Web standards