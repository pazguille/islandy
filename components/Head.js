const { h } = require('preact');
const { useContext } = require('preact/hooks');
const { createContext } = require('preact');

const HeadContext = createContext([]);

function Head({ children }) {
  const context = useContext(HeadContext);
  context.push(children);
  return null;
}

module.exports = Head;
exports = module.exports;
exports.HeadContext = HeadContext;
