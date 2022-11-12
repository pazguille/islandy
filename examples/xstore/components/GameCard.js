import GameInfo from './GameInfo';

export default function GameCard({ game }) {
  const img = game.images.boxart ? game.images.boxart.url : game.images.poster?.url;
  return (
    <article class="game-preview">
      <GameInfo game={game} />
      <img class="game-img" width="165" height="165" alt="" decoding="async" loading="lazy" src={`${img}?w=330`} />
    </article>
  );
}
