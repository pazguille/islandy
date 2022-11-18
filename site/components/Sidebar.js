export default function Sidebar({ toc }) {
  return (
    <nav>
      <ul>
        {Object.keys(toc).map(s => (
          <li>
            <h3><a href={`/docs/${s}`}>{toc[s].title}</a></h3>
            {
              toc[s].pages && <ul>
                {Object.keys(toc[s].pages).map(d => (
                  <li>
                    <a href={`/docs/${s}/${d}`}>
                      {toc[s].pages[d]}
                    </a>
                  </li>
                ))}
              </ul>
            }
          </li>
        ))}
      </ul>
    </nav>
  );
}
