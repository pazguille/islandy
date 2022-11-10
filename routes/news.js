import { getXboxNewsURL } from '../utils';
import Layout from '../components/Layout';
import News from '../components/News';

export async function get(req, res, next) {
  const news = await fetch(getXboxNewsURL()).then(res => res.json());
  res.locals.data = news;
  next();
}

export default function NewsPage({ data }) {
  const news = data;
  return (
    <Layout section="news">
      <div className="news page page-fixed page-on">
        <div className="news-content page-content">
          <h2><img src="/src/assets/icons/news.svg" width="24" height="24" /> Noticias recientes</h2>
          <ul>
            {news.map((n, i) => (
              <li key={i}>
                <News news={n}  />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
