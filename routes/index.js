const { h } = require('preact');
const Head = require('../components/Head');
const Layout = require('../components/Layout.js');
const Island = require('../components/Island.js');
const Counter = require('../islands/Counter');

module.exports = function Home() {
  return (
    <Layout section="home">
      <Head>
        <title>HOME</title>
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
