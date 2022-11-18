Create a new route to a Islandy project by creating a new file in the `routes/` folder.

After getting the project running locally, the next step is to add a new route to the project. Routes encapsulate the logic for handling requests to a particular path in your project. They can be used to handle API requests or render HTML pages.

Routes are defined as files in the `routes` directory. The file name of the module is important: it is used to determine the path that the route will handle. For example, if the file name is `index.js`, the route will handle requests to `/`. If the file name is `about.js`, the route will handle requests
to `/about`. If the file name is `contact.js` and is placed inside of the `routes/about/` folder, the route will handle requests to `/about/contact`.

Route files that render HTML are JavaScript modules that export a JSX component as their default export. This component will be rendered for every request to the route's path. The component receives a few properties that can be used to customize the rendered output, such as the current route, the url of the request, and handler data (more on that later).

In the demo project we'll create a route to handle the `/about` page. To do this, one needs to create a new `routes/about.js` file. In this file, we can declare a component that should be rendered every time a user visits the page. This is done with JSX.


```js
// routes/about.js

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}
```

The new page will be visible at `http://localhost:8080/about`.
