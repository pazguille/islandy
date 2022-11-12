import GameCardNew from './GameCardNew';
import GameCardSoon from './GameCardSoon';
import GameCard from './GameCard';

export default function gameListTemplate({ section }) {
  return (
    <ul class="carousel" aria-roledescription="Carrusel" aria-label={section.title}>
      <button class="prev arrow" aria-hidden="true">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3 18.7a1 1 0 0 0 1.4-1.4l-1.4 1.4ZM9 12l-.7-.7a1 1 0 0 0 0 1.4L9 12Zm6.7-5.3a1 1 0 0 0-1.4-1.4l1.4 1.4Zm0 10.6-6-6-1.4 1.4 6 6 1.4-1.4Zm-6-4.6 6-6-1.4-1.4-6 6 1.4 1.4Z" fill="#ffffff"/></svg>
      </button>
      {section.type === 'new' ?
          section.list.map(game => <li><GameCardNew game={game} /></li>)
        : section.type === 'coming' ?
            section.list.map(game => <li><GameCardSoon game={game} /></li>)
        : section.list.map(game => <li><GameCard game={game} /></li>)
      }
      <button class="next arrow" aria-hidden="true">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path style="transform: rotate(180deg) translate(-24px, -24px);" d="M14.3 18.7a1 1 0 0 0 1.4-1.4l-1.4 1.4ZM9 12l-.7-.7a1 1 0 0 0 0 1.4L9 12Zm6.7-5.3a1 1 0 0 0-1.4-1.4l1.4 1.4Zm0 10.6-6-6-1.4 1.4 6 6 1.4-1.4Zm-6-4.6 6-6-1.4-1.4-6 6 1.4 1.4Z" fill="#ffffff"/></svg>
      </button>
    </ul>
  );
}
