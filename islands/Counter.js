const { h } = require('preact');
const { useSignal } = require('@preact/signals');

function Counter({ start = 0 }) {
  const count = useSignal(start);
  const increment = () => count.value += 1;
  const decrement = () => count.value -= 1;
  return (
    <div>
      <output>Current value: {count.value}</output>
      <button onClick={decrement}>-1</button>
      <button onClick={increment}>+1</button>
    </div>
  );
}

module.exports = Counter;
