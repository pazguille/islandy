import { readFileSync } from 'fs';
import { useContext } from 'preact/hooks';
import { marked } from 'marked';
import Layout from '../../../components/Layout';
import { AppContext } from '../../../components/Layout';

export default function Docs({ params }) {
  const section = params.section || 'index';
  const content = readFileSync(`${process.cwd()}/content/${params.page}/${section}.md`, 'utf8');
  const { toc } = useContext(AppContext);

  return (
    <Layout section="docs">
      <>
        <h1>{params.section ? toc[params.page].pages[params.section] : toc[params.page].title}</h1>
        <div class="markdown-body"
          dangerouslySetInnerHTML={{__html: marked.parse(content.toString()) }}
        />
      </>
    </Layout>
  );
};
