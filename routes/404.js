import { h } from 'preact';
import Head from '../pie/Head';
import Layout from '../components/Layout.js';

export default function Error404() {
  return (
    <Layout section="error404">
      <Head>
        <title>NOT FOUND</title>
      </Head>
      <h1>NOT FOUND</h1>
    </Layout>
  );
};
