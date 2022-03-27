---
hide:
    - navigation

---
# Express.js

[:octicons-arrow-left-24: Return to Platform Development](/Knowledge-Notebook/Platform-Development/)

---

## Resources

!!! cite ""

    1. (Express Docs](http://expressjs.com)

## Getting started

---

After initialising a npm project

```console
npm install express
```

```js
const express = require(&#39;express&#39;)
const app = express()
const port = 3000

app.get(&#39;/&#39;, (req, res) =&gt; {
  res.send(&#39;Hello World!&#39;)
})

app.listen(port, () =&gt; {
  console.log(`Example app listening on port ${port}`)
})
```

## Routing

---

&gt; [Express routing](http://expressjs.com/en/guide/routing.html)

Determines how an application responds to a request given it&#39;s URI and HTTP method. Each route can have one or more function handlers which are executed with when a route is matched.

```js
app.METHOD(PATH, HANDLER)
```

Where:

- `app` is an instance of `express`.
- `METHOD` is an [HTTP request method](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods), in lowercase. (`.get`, `.post`, `.put`, `.delete`, etc.)
- `PATH` is a path on the server.
- `HANDLER` is the function executed when the route is matched.

### Route Parameters

### Response methods

| Method | Description |
| --- | --- |
| [res.download()](http://expressjs.com/en/4x/api.html#res.download) | Prompt a file to be downloaded. |
| [res.end()](http://expressjs.com/en/4x/api.html#res.end) | End the response process. |
| [res.json()](http://expressjs.com/en/4x/api.html#res.json) | Send a JSON response. |
| [res.jsonp()](http://expressjs.com/en/4x/api.html#res.jsonp) | Send a JSON response with JSONP support. |
| [res.redirect()](http://expressjs.com/en/4x/api.html#res.redirect) | Redirect a request. |
| [res.render()](http://expressjs.com/en/4x/api.html#res.render) | Render a view template. |
| [res.send()](http://expressjs.com/en/4x/api.html#res.send) | Send a response of various types. |
| [res.sendFile()](http://expressjs.com/en/4x/api.html#res.sendFile) | Send a file as an octet stream. |
| [res.sendStatus()](http://expressjs.com/en/4x/api.html#res.sendStatus) | Set the response status code and send its string representation as the response body. |

### app.route()

### express.Router

A `Router` instance is a complete middleware and routing system

```javascript
//birds.js
const express = require(&#39;express&#39;)
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) =&gt; {
  console.log(&#39;Time: &#39;, Date.now())
  next()
})
// define the home page route
router.get(&#39;/&#39;, (req, res) =&gt; {
  res.send(&#39;Birds home page&#39;)
})
// define the about route
router.get(&#39;/about&#39;, (req, res) =&gt; {
  res.send(&#39;About birds&#39;)
})

module.exports = router
```

```javascript
//app.js
const birds = require(&#39;./birds&#39;)
//...
app.use(&#39;/birds&#39;, birds)
```

## Middleware

---

## Error handling

---

## JSON

> See [JSON](JSON.md)

## Static files

---

> [express.static](http://expressjs.com/en/4x/api.html#express.static)

```javascript
express.static(root, [options])
```

Serve resources in a directory.

```javascript
app.use(express.static(&#39;[directory]&#39;))
```

To serve resources from multiple directories, use above for each dir.

The name of the dir. will not be part of the URL. If a &#39;mount path&#39; is wanted, add path before.

```javascript
app.use(&#39;/static&#39;, express.static(&#39;public&#39;))
```

## Integrations

---

### MongoDB

> See MongoDB

## Prisma

> See Prima

## Next.js

> See Next.js