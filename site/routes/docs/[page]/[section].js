import { readFileSync } from 'fs';
import { marked } from 'marked';
import Layout from '../../../components/Layout';
import Sidebar from '../../../components/Sidebar';
import toc from '../../../toc.json';

export default function Docs({ params }) {
  const section = params.section || 'index';
  const content = readFileSync(`${process.cwd()}/../docs/${params.page}/${section}.md`, 'utf8');

  return (
    <Layout section="docs">
      <Sidebar toc={toc} />
      <div>
        <h3>{params.section ? toc[params.page].pages[params.section] : toc[params.page].title}</h3>
        <div
          dangerouslySetInnerHTML={{__html: marked.parse(content.toString()) }}
        />
      </div>
    </Layout>
  );
};
