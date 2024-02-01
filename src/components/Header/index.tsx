import styles from './style.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Wordle</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Start Game</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/highscores">Highscores</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
