import { slugify } from '../utils';

export default function GameImportant({ game }) {
  const img = game.images.featurepromotionalsquareart ?
    game.images.featurepromotionalsquareart.url : game.images.boxart?.url;

  return (
    <article class="game-important">
      <strong class="game-important-tag">Oferta destacada</strong>
      <h2 class="game-title">
        <a id={`detail-${game.id}`} href={`/game/${slugify(game.title)}_${game.id}`} class="link">{game.title}</a>
      </h2>
      <span class="game-important-tag game-price-off">{game.price.off}% OFF</span>
      <img class="game-img" width="330" height="330" alt="" fetchpriority="high" decoding="async" src={`${img}?w=720&q=70`} />
    </article>
  );
}
