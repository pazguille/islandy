const { h, hydrate } = require('preact');

window.yieldToMain = function yieldToMain(task) {
  return new Promise(resolve => {
    setTimeout(() => {
      task && task();
      resolve();
    }, 0);
  });
}

function hydrateIsland(island) {
  const component = island.getAttribute('name').toLowerCase();
  import('/_islandy/island-' + component + '.js').then((component) => {
    yieldToMain(() => {
      const props = JSON.parse(island.getAttribute('props'));
      hydrate(
        h(component.default, {...props}),
        island,
      );
    });
  });
}

[].slice.call(document.querySelectorAll('p-island[whenidle]'))
  .forEach((island) => {
    let i = island;
    requestIdleCallback(() => {
      hydrateIsland(i);
    });
  });

const io = new IntersectionObserver(
  async (entries) => {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        hydrateIsland(entry.target);
        io.unobserve(entry.target);
      }
    });
  }
);

[].slice.call(document.querySelectorAll('p-island[whenvisible]'))
  .forEach(island => io.observe(island));
