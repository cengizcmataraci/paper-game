import "./App.css";
import { RecoilRoot } from "recoil";
import Game from "./Game";
import Score from "./Score";
import HighScore from "./HighScore";
import Gems from "./Gems";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Paper Click</h1>
        <Score />
        <HighScore />
        <Game />
        <Gems />
      </div>
    </RecoilRoot>
  );
}

export default App;
