module.exports = function document({ head, body, props }) {
  return `
    <!DOCTYPE html>
    <html lang="es-AR">
      <head>
        <meta charset="utf-8" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover" />
        <link rel="shortcut icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥧</text></svg>" />
        ${head}
      </head>
      <body>
        ${body}
        <script>
          window.addEventListener('load', () => {
            if (document.querySelector('p-island')) {
              import('/js/boot.js');
            }
          });
        </script>
      </body>
    </html>
  `;
}
