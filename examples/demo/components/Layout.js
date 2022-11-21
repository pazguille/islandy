import { createContext } from 'preact';
import Head from 'islandy/head';

export const AppContext = createContext({
  section: '',
});

export default function Layout({ children, section }) {
  return (
    <AppContext.Provider value={{ section }}>
      <Head>
        <title>Islandy Demo</title>
        <link rel="stylesheet" href="/src/styles.css" />
        <link rel="shortcut icon" href="/src/assets/favicon.png" />
        <link rel="apple-touch-icon" href="/src/assets/favicon.png" />
      </Head>
      <header>
        <h1>🏝️ Welcome to Islandy</h1>
      </header>
      <main>
        {children}
      </main>
    </AppContext.Provider>
  );
}
