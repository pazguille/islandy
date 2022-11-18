To start a Islandy project, just run `npm run dev`. This will start the project, in watch mode.

```
$ npm run dev

> islandy-demo@1.0.0 dev
> islandy build --watch | islandy dev

> App listening on port 8080.
```

For development, the Islandy server will automatically reload whenever you make a change to your code.

If you want to change the port, modify the options bag of the `islandy.config.js` to include an explicit port number:

```js
// islandy.config.js

module.exports = {
  port: 8080,
};
```

If you now visit http://localhost:8000, you can see the running project. Try change some of the code in `routes/index.js` and see how the page updates automatically when you save and reload the browser.
