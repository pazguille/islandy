const { h } = require('preact');
const { render } = require('preact-render-to-string');
const { HeadContext } = require('../components/Head');

function template({ head, body }) {
  return `
    <!DOCTYPE html>
    <html lang="es-AR">
      <head>
        <meta charset="utf-8" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover" />
        ${head}
      </head>
      <body>
        ${body}
        <script>
          window.addEventListener('load', () => import('/boot.js'));
        </script>
      </body>
    </html>
  `;
}

module.exports = function renderPage(Page, props) {
  const headComponents = [];
  const body = render(
    <HeadContext.Provider value={headComponents}>
      <Page {...props} />
    </HeadContext.Provider>
  );
  return template({
    head: render(headComponents),
    body,
  });
}
