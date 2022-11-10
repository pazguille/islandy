import Head from '../pie/Head';
import Layout from '../components/Layout';

export const middlewares = [
  (err, req, res, next) => {
    console.error(err);
    next(err);
  }
];

export default function Error500() {
  return (
    <Layout section="error500">
      <Head>
        <title>OOPS!</title>
      </Head>
      <h1>OOPS!</h1>
    </Layout>
  );
};
