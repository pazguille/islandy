import fetch from 'isomorphic-unfetch';

import { getXboxURL } from '../utils';
import Head from '../pie/Head';
import Layout from '../components/Layout';
import Counter from '../islands/Counter';
import GameImportant from '../components/GameImportant';
import Section from '../components/Section';

export async function get(req, res, next) {
  const aboveTheFold = [
    {
      type: 'new',
      title: 'Salidos del horno',
      icon: '',
      list: [],
    },
    {
      type: 'deals',
      title: 'Ahorrate unos mangos',
      icon: <img src="/src/assets/icons/tag.svg" width="24" height="24" />,
      list: [],
    },
  ];

  await Promise.all(aboveTheFold.map(async ({ type }) => {
    const games = await fetch(getXboxURL(type)).then(res => res.json());
    const section = aboveTheFold.find(section => section.type === type);
    section.list.push(...games);
  }));

  const hotsale = aboveTheFold[1].list.reduce(function (p, v) {
    return ( p.price.off > v.price.off ? p : v );
  });

  const lcp = hotsale.images.featurepromotionalsquareart ?
  hotsale.images.featurepromotionalsquareart.url : hotsale.images.boxart?.url;

  res.locals = { aboveTheFold, hotsale, lcp: lcp + '?w=720&q=70' };
  next();
};

export default function Home({ lcp, hotsale, aboveTheFold }) {
  return (
    <Layout section="">
      <Head>
        <link rel="preload" as="image" href={lcp} fetchpriority="high" />
      </Head>
      <div className="home">
        <GameImportant game={hotsale} />
        {aboveTheFold.map((section, index) =>
          <>
            <Section section={section} key={section.type} />
            { index === 3 && <GamePassSection /> }
            { index === 5 && <GoldSection /> }
          </>
        )}
        <h2>Counter Time!</h2>
        <Counter whenVisible />
      </div>
      <script dangerouslySetInnerHTML={{ __html:`
        window.addEventListener('load', () => {
          document.body.addEventListener('click', (eve) => {
            if (eve.target.classList.contains('next')) {
              eve.target.parentNode.scrollBy(660, 0);
            }
            if (eve.target.classList.contains('prev')) {
              eve.target.parentNode.scrollBy(-660, 0);
            }
          });
        });
      `}} />
    </Layout>
  );
};
