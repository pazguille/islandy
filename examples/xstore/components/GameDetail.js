import GamePrice from './GamePrice';
import WishToggle from '../islands/WishToggle';
import ShareButton from '../islands/ShareButton';
import Video from '../islands/Video';
import VideoPlaylist from '../islands/VideoPlaylist';

export default function GameDetail({ game }) {
  const img = game.images.titledheroart ?
    (game.images.titledheroart.url || game.images.titledheroart[0].url)
    : game.images.screenshot ? game.images.screenshot[0].url
    : game.images.superheroart.url;

  const until = Math.ceil((Date.parse(new Date(game.price.ends)) - Date.parse(new Date())) / (24 * 3600 * 1000));
  return (
    <article class="game-preview" style={{'--game-preview-url': `url(${img}?w=1160&q=70)`}}>
      <Video title={game.title} />
      <div>
        <div class="game-preview-info">
          <h3 class="game-title">{game.title}</h3>
          <p class="game-by">by {game.developer || game.publisher}</p>

          <WishToggle id={game.id} title={game.title} amount={game.price.amount} />
          <ShareButton title={game.title} />

          {game.game_pass ? <img class="game-pass" src="/src/assets/game-pass.svg" width="70" height="13" alt="Disponible en Game Pass" /> : null}
          {game.ea_play ? <img class="game-pass" src="/src/assets/ea-play.png" width="70" height="13" alt="Disponible en EA Play" /> : null}

          <GamePrice game={game} />

          <a href={`https://www.xbox.com/es-ar/games/store/a/${game.id}`} class="game-buy-now btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" width="1em" height="1em" fill="#ffffff" aria-hidden="true"><path d="M492 158q-4 0-5-1v-2l2-3Q614 77 746 39t278-39q143 0 277 38t256 113l3 2q-3 5-6 5-8 0-17-2t-17-4q-9-1-18-1t-18 0q-47 0-95 9t-96 24-92 34-88 39q-22 11-44 21t-43 25h-5q-43-27-100-54t-120-49-123-36-113-14q-19 0-39 4t-34 4zm251 412q-44 53-101 128T525 862t-117 184-102 189-72 180-28 156q0 17 2 37t8 36l-1 2-2 1-4-2q-103-139-156-293T0 1024q0-98 20-199t60-196 96-180 130-153q5-4 15-5t15-2q30 0 66 14t75 38 76 53 74 60 65 59 51 50l1 4-1 3zm968-281q7 0 16 1t15 6q73 71 130 155t96 178 59 194 21 201q0 173-53 328t-156 293l-6 1-2-3q3-4 5-14t3-21 2-22 1-16q0-69-27-155t-72-180-102-190-117-184-117-163-102-129l-1-3 1-3q21-21 50-49t65-58 73-61 77-53 75-38 66-15zm-687 533q29 18 56 42t54 47q42 37 102 94t127 128 131 149 117 155 84 149 32 129q0 23-6 43t-23 37q-31 31-69 57t-76 49q-120 72-254 109t-275 38q-141 0-274-37t-255-110q-17-10-43-26t-51-37-47-40-27-39q-7-20-7-45 0-54 30-122t78-142 110-149 123-142 118-123 97-92q34-30 72-64t76-58z"></path></svg>
            {new Date(game.release_date) > new Date() ? 'Precompar' : game.price.amount > 0 ? 'Comprar' : 'Descargar'}
          </a>

          {until ? <div class="game-deal-ends"><small>La oferta termina en {until} días.</small></div> : null}


          <h4>Fecha de lanzamiento:</h4>
          <time datetime={`${new Date(game.release_date).toLocaleString('es-AR')}`}> {new Date(game.release_date).toLocaleString('es-AR', { day: '2-digit' , month: '2-digit', year: 'numeric',  })}</time>
        </div>

        {Array.isArray(game.images.screenshot) ?
          <>
            <h4 class="visually-hidden">Imágenes</h4>
            <div class="carousel game-preview-images">
              <img alt="" width="345" height="194" loading="lazy" decoding="async" src={`${img}?w=1160&q=70`} />
              {game.images.screenshot.map((img) => <img alt="" width="345" height="194" loading="lazy" decoding="async" src={`${img.url}?w=1160&q=70`} />)}
            </div>
          </>
        : null}

        <h4 class="visually-hidden">Videos</h4>
        <div class="carousel game-preview-playlist">
          <a href={`https://www.youtube.com/results?search_query=${game.title}+xbox+trailer`} target="_blank" rel="noreferrer noopener" class="game-preview-video" aria-label="Ver trailers en YouTube">
            <img width="25" height="32" loading="lazy" decoding="async" src="/src/assets/icons/play.svg" alt="" />
          </a>
          <VideoPlaylist whenVisible title={game.title} />
        </div>

        <h4 class="visually-hidden">Descripción</h4>
        <p class="game-description">{game.description}</p>
      </div>
    </article>
  );
}
