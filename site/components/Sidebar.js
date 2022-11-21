export default function Sidebar({ toc }) {
  return (
    <nav>
      <ol>
        {Object.keys(toc).map(s => (
          <li>
            <a href={`/docs/${s}`}><strong>{toc[s].title}</strong></a>
            {
              toc[s].pages && <ol>
                {Object.keys(toc[s].pages).map(d => (
                  <li>
                    <a href={`/docs/${s}/${d}`}>
                      {toc[s].pages[d]}
                    </a>
                  </li>
                ))}
              </ol>
            }
          </li>
        ))}
      </ol>
    </nav>
  );
}
