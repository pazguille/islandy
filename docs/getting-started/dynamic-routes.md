Create a dynamic route in Islandy by adding a dynamic segment to the route name in the routes' file name on disk: `/hello/[name].js`.

The `/about` route created on the last page is pretty static. It does not matter what query or path parameters are passed to the route, it will always render the same page. Let's create a `/hello/:name` that will render a page with a greeting that contains the name passed in the path.

Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the `req.params` object, with the name of the route parameter specified in the path as their respective keys.

For example, the `/hello/:name` route will match the paths `/hello/guille` and `/hello/eevee`, but not `/hello` or `/hello/guille/paz`.

Islandy supports dynamic routes out of the box through file system routing. To define routes with route parameters, just put square brackets around that segment in the file name.

For example the `/hello/:name` route maps to the file name `routes/hello/[name].js`.

Just like the static `/about` route, the dynamic `/hello/:name` route will render a page. The module must once again expose a component as a default export. This time the component will receive the matched path segment properties as arguments in its `props` object though.

```js
// routes/hello/[name].js

export default function Hello(props) {
  const { name } = props.params;
  return (
    <main>
      <p>Hello, {name}!</p>
    </main>
  );
}
```

Navigating to `https://localhost:8080/hello/pazguille` will now render a page showing "Hello, pazguille!".
