import { h } from 'preact';
import Head from '../pie/Head';
import Island from '../pie/Island.js';

import Layout from '../components/Layout.js';
import Counter from '../islands/Counter';

export const middlewares = [
  (req, res, next) => {
    res.setHeader("X-Custom-Header", "Hello");
    next();
  },
];

export function get(req, res, next) {
  res.locals.foo = 'Hello';
  next();
};

export default function Home({ foo }) {
  return (
    <Layout section="home">
      <Head>
        <title>HOME - {foo}</title>
      </Head>

      <h1>Home</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>

      <Island whenVisible>
        <Counter start={0} />
      </Island>
    </Layout>
  );
};
