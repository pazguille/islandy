Islandy is a modern web framework for JavaScript developers focused on progressive enhancement. It's designed to create accessible, performant and high-quality web applications, based on [Express.js](https://expressjs.com/) and [Peact](https://preactjs.com).

Islandy is a combination of Express.js and Preact that renders pages on demand, on the server. Also provides an interface for seamlessly rendering some components on the client for maximum interactivity: Islands.

The Islands architecture encourages ship less JavaScript to the user with small, focused chunks of interactivity within server-rendered web pages. The output of islands is progressively enhanced HTML, with more specificity around how the enhancement occurs.

The client JavaScript for the islands of interactivity is delivered and hydrated independently, allowing the rest of the page to be just static HTML.

Some stand out features:

- Zero config necessary
- Server side rendering by default (no client JS is required)
- Optional client side hydration of individual components (islands)
- Supports all the features that are offered by Express.js
- File-system routing with hanlders and middlewares


Islandy projects can be deployed manually to any platform with `node`.
