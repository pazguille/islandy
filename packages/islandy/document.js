module.exports = function document({ head, body, props }) {
  return `
    <!DOCTYPE html>
    <html lang="es-AR">
      <head>
        ${head}
      </head>
      <body>
        ${body}
        <script>
          window.addEventListener('load', () => {
            if (document.querySelector('p-island')) {
              import('/_islandy/boot.js');
            }
          });
        </script>
      </body>
    </html>
  `;
}
