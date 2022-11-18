const { h, options } = require('preact');
const { render } = require('preact-render-to-string');
const { HeadContext } = require('./head');
const document = require('./document');
const Island = require('./island');

const cwd = process.cwd();
const { islands } = require(`${cwd}/manifest.islandy`);

module.exports = function renderPage(Page, props) {
  const headComponents = [];
  const body = render(
    <HeadContext.Provider value={headComponents}>
      <Page {...props} />
    </HeadContext.Provider>
  );

  headComponents.unshift(...[
    <meta charset="utf-8" />,
    <meta name="HandheldFriendly" content="True" />,
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover" />,
    <link rel="shortcut icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏝️</text></svg>" />,
  ]);

  return document({
    props,
    head: render(unique(headComponents)),
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

function unique(head) {
  const nodes = [];
  const map = new Map();

  for (const item of head.flat().reverse()) {
    if (item) {

      if (['title', 'base'].includes(item.type)) {
        if (!map.has(item.type)) {
          nodes.push(item);
          map.set(item.type, true);
        }

      } else if ('meta' === item.type) {
        if (item.props.charset) {
          if (!map.has('charset')) {
            nodes.push(item);
            map.set('charset', true);
          }

        } else if (item.props.name === 'viewport') {
          if (!map.has('viewport')) {
            nodes.push(item);
            map.set('viewport', true);
          }
        }

      } else if ('link' === item.type && item.props.rel.includes('icon')) {
        if (!map.has('favicon')) {
          nodes.push(item);
          map.set('favicon', true);
        }

      } else {
        nodes.push(item);
      }

    }
  }
  return nodes.reverse();
}
