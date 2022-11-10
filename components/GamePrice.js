import { convertDollar } from '../utils';

export default function GamePrice({ game }) {
  if (!game.sold_separately) {
    return null;
  }

  return (
    <div class="game-price">
      {game.price.off ? <span class="game-price-off">{game.price.off}% OFF</span> : null}
      {game.price.deal ? <div class="game-price-prev">
        <x-price amount={convertDollar(game.price.amount)} strike></x-price>
      </div> : null}
      <span class="game-price-amount">
        {(game.price.deal || game.price.amount) ?
          <x-price amount={convertDollar(game.price.deal || game.price.amount)}></x-price>
          : game.demo ? 'Demo' : 'Gratis'
        }
      </span>
      {game.price.amount > 0 ?
        <small class="game-price-taxes">*impuestos incluídos</small>
        : null
      }
      {game.gold_deal ? <div>Precio Gold: <x-price amount={convertDollar(game.price.gold_deal)}></x-price></div> : null}
    </div>
  );
}
