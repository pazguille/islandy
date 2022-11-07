const { h } = require('preact');

module.exports = function Layout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}
