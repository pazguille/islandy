Add middlewares to a route to customize HTTP headers, implement API routes, do data fetching for a rendered page, or handle form submissions.

Routes actually consist of two parts: middlewares, and the page component.

Middleware are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.

By default, all routes that don't define a middleware just renders the page component.

Middlewares can have two forms: a function named by the HTTP method it handles or an array where each value is a function for all HTTP request methods.

To define a middleware in a route module, one must export it as a named export with
the name:

- `get`, `post`, `put`, `delete`
- `middlewares`

Here is an example of a custom `get` handler that renders the page component and
then adds a custom header to the response before returning it:

```js
// routes/about.js

export function get(req, res, next) {
  res.setHeader();
  next();
};

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}
```

Here is an example of a custom `middlewares` handler that renders the error page component and
log a the error before returning it:

```js
// routes/500.js

export const middlewares = [
  (err, req, res, next) => {
    console.error(err);
    next(err);
  }
];

export default function Error500() {
  return (
    <main>
      <h1>OOPS!</h1>
      <p>This is the error page.</p>
    </main>
  );
};
```
