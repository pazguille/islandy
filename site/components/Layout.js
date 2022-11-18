import { createContext } from 'preact';
import Head from './Head';

export const AppContext = createContext({
  section: '',
});

export default function Layout({ children, section }) {
  return (
    <AppContext.Provider value={{ section }}>
      <Head />
      <header>
        <h1>🏝️ Islandy</h1>
      </header>
      <main>
        {children}
      </main>
    </AppContext.Provider>
  );
}
