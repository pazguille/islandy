import Head from '../../pie/Head';
import { gameXboxURL } from '../../utils';
import Layout from '../../components/Layout';
import GameDetail from '../../components/GameDetail';

export async function get(req, res, next) {
  const gameId = req.params.game.split('_')[1];

  if (!gameId) {
    return res.redirect(new URL(req.url).origin);
  }

  const game = await fetch(gameXboxURL(gameId)).then(res => res.json()).then(game => game[0]);
  const lcp = game.images.titledheroart ?
    (game.images.titledheroart.url || game.images.titledheroart[0].url)
    : game.images.screenshot ? game.images.screenshot[0].url
    : game.images.superheroart.url;

  res.locals.data = { game, lcp };
  next();
}


export default function Detail({ data }) {
  const { game, lcp } = data;

  return (
    <Layout>
      <Head>
        <title>{`${game.title} | XStore`}</title>
        <meta name="description" content={`${game.title}: ${game.description.split('.')[0].replace(/\n/gi, '')}.`} />
        <link rel="preload" as="image" href={`${lcp}?w=1160&q=70`} fetchpriority="high" />
        <link rel="preconnect" href="https://media.rawg.io/" />
      </Head>
      <div className="detail page page-on">
        <div className="detail-content page-content">
          <GameDetail game={game} />
        </div>
      </div>
    </Layout>
  )
}
