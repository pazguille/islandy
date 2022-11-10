import GameList from './GameList';

export default function Section({ section }) {
  return (
    <section>
      <h2>{section.icon}{section.title}</h2>
      <GameList section={section} />
    </section>
  );
}
