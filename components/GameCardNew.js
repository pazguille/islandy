import GameInfo from './GameInfo';

export default function GameCardNew({ game }) {
  const img = game.images.poster?.url;
  return (
    <article class="game-preview-new" style={{"--game-preview-new": `url(${img}?w=630)`}}>
      <GameInfo game={game} />
      <img class="game-img" width="180" height="270" alt="" loading="lazy" decoding="async" src={`${img}?w=360`} />
    </article>
  );
}
