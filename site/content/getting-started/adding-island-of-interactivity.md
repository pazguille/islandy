Adding islands of interactivity is a new performance-focused way to add interactive client-side components to your pages.

The Islands architecture encourages ship less JavaScript to the user with small, focused chunks of interactivity within server-rendered web pages. The output of islands is progressively enhanced HTML, with more specificity around how the enhancement occurs.

All pages are rendered server side, but you can create island components that are also rendered client side. To do this, Islandy projects have a special `islands/` folder.

Here is an example of an island component:

```js
// islands/Counter.js

import { useSignal } from '@preact/signals';

export default function Counter({ start = 0 }) {
  const count = useSignal(start);
  const increment = () => count.value += 1;
  const decrement = () => count.value -= 1;
  return (
    <div>
      <button onClick={decrement}>-1</button>
      <output>{count.value}</output>
      <button onClick={increment}>+1</button>
    </div>
  );
}
```

To include this in a page component, one can just use the component normally. Islandy will take care of automatically mounting the island component on the client with the correct props.


```js
// routes/index.js

import Counter from "../islands/Counter";

export default function Page() {
  return (
    <main>
      <h1>Counter Time!</h1>
      <Counter start={10} />
    </main>
  );
}
```

The islands have two special `props` added by the framework to control how and when the island is initialized:

- `whenIdle` (by default)
- `whenVisible`

Foe example, the page that is rendered on the client now has an interactive counter only when it's visible:

```js
// routes/index.js

import Counter from "../islands/Counter";

export default function Page() {
  return (
    <main>
      <h1>Counter Time!</h1>
      <Counter start={10} />
    </main>
  );
}
```

[Learn more about Islands Architecture](https://jasonformat.com/islands-architecture/).
