import { createContext } from 'preact';
import Head from 'islandy/head';
import Sidebar from '../components/Sidebar';
import toc from '../toc.json';

export const AppContext = createContext({
  section: '',
  toc,
});

export default function Layout({ children, section }) {
  return (
    <AppContext.Provider value={{ section, toc }}>
      <Head>
        <title>Islandy Docs</title>
        <link rel="stylesheet" href="/src/styles.css" />
        <link rel="stylesheet" href="https://unpkg.com/prismjs@1.29.0/themes/prism-tomorrow.min.css" />
      </Head>
      <header>
        <h1>🏝️ Islandy Docs</h1>
      </header>
      <Sidebar toc={toc} />
      <main>
        {children}
      </main>
      <script defer src="https://unpkg.com/prismjs@1.29.0/prism.js"></script>
      <script defer src="https://unpkg.com/prismjs@1.29.0/components/prism-jsx.min.js"></script>
      <script defer src="https://unpkg.com/prismjs@1.29.0/components/prism-bash.min.js"></script>
    </AppContext.Provider>
  );
}
