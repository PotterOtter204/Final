import "./App.css";
//import TitleImg from './Assets/TitleImg.png';

export default function App() {
  return (
    <main>
      <header>
        <h3>Arcana Wiki</h3>
      </header>
      <body>
        <ul>
          <li>
            <a href="legends">Legends</a>
          </li>
          <li>
            <a href="enemies">Enemies</a>
          </li>
          <li>
            <a href="bosses">Bosses</a>
          </li>
          <li>
            <a href="runes">Runes</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="currencies">Currencies</a>
          </li>
          <li>
            <a href="chests">Chests</a>
          </li>
          <li>
            <a href="gamemodes">GameModes</a>
          </li>
        </ul>

        <p>- Updates</p>
      </body>

      <footer>
        <p>
          <a href="forum">Discussion Forum</a>
        </p>
      </footer>
    </main>
  );
}
