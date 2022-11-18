import Layout from '../components/Layout';
import Counter from '../islands/Counter';

export async function get(req, res, next) {
  res.locals = { start: 10 };
  next();
};

export default function Home({ start }) {
  return (
    <Layout section="home">
      <p>Try to update this message in the ./routes/index.js file, and refresh.</p>
      <h2>Counter Time!</h2>
      <Counter start={start} />
    </Layout>
  );
};
