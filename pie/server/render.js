const { h, options } = require('preact');
const { render } = require('preact-render-to-string');

const { HeadContext } = require('../Head');
const document = require('./document');
const { islands } = require('../../manifest.pie');
const Island = require('../Island');

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

let ignoreNext = false;
const oldHook = options.vnode;
const islandsTypes = Object.keys(islands).filter((i) => i.startsWith('island')).map(i => i.replace('island-', ''));
options.vnode = vnode => {
  if (typeof vnode.type === 'function' && islandsTypes.includes(vnode.type.name.toLowerCase())) {
    if (ignoreNext) {
      ignoreNext = false;
      return;
    }
    const originalType = vnode.type;
    vnode.type = (props) => {
      ignoreNext = true;
      const child = h(originalType, props);
      return h(
        Island,
        {
          whenIdle: props.whenVisible ? undefined : true,
          whenVisible: props.whenVisible,
        },
        child,
      );
    };
  }
  if (oldHook) {
    oldHook(vnode);
  }
}
