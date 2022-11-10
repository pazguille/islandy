import { h } from 'preact';
import Head from '../pie/Head';

import Layout from '../components/Layout.js';

export default function About() {
  return (
    <Layout section="home">
      <Head>
        <title>ABOUT</title>
      </Head>
      <h1>About</h1>
    </Layout>
  );
};
