const { useSignal } = require('@preact/signals');

function Counter({ start = 0 }) {
  const count = useSignal(start);
  const increment = () => count.value += 1;
  const decrement = () => count.value -= 1;
  return (
    <div style={`
        display: flex;
        gap: 50px;
        align-items: center;
        justify-content: center;
        margin: 25px auto;
    `}>
      <button className="btn" onClick={decrement}>-1</button>
      <output>{count.value}</output>
      <button className="btn" onClick={increment}>+1</button>
    </div>
  );
}

module.exports = Counter;
