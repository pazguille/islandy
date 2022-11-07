const { h } = require('preact');
const Head = require('../components/Head');
const Layout = require('../components/Layout.js');

module.exports = function About() {
  return (
    <Layout section="home">
      <Head>
        <title>ABOUT</title>
      </Head>
      <h1>About</h1>
    </Layout>
  );
};
