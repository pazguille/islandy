const { h } = require('preact');
const { render } = require('preact-render-to-string');

const { HeadContext } = require('../Head');
const document = require('./document');

module.exports = function renderPage(Page, props) {
  const headComponents = [];
  const body = render(
    <HeadContext.Provider value={headComponents}>
      <Page {...props} />
    </HeadContext.Provider>
  );
  return document({
    props,
    head: render(headComponents),
    body,
  });
}
