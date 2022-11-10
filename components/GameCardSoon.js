import GameInfo from './GameInfo';

export default function GameCardSoon({ game }) {
  const img = game.images.titledheroart ?
  (game.images.titledheroart.url || game.images.titledheroart[0].url)
  : game.images.screenshot[0].url;
  return (
    <article class="game-preview-soon">
      <GameInfo game={game} />
      <img class="game-img" width="256" height="144" alt="" loading="lazy" decoding="async" src={`${img}?w=512&q=70`} />
    </article>
  );
}
