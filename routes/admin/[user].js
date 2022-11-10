import { h } from 'preact';
import Head from '../../pie/Head';
import Layout from '../../components/Layout.js';

export function get(req, res, next) {
  res.locals.user = req.params.user;
  next();
};

export default function User({ user }) {
  return (
    <Layout section="user">
      <Head>
        <title>ADMIN</title>
      </Head>
      <h1>Hola {user}!</h1>
    </Layout>
  );
};
