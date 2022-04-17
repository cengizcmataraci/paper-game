import { useRecoilValue } from "recoil";
import { gameScore, useResetScore } from "./atoms";

const Score = () => {
  const score = useRecoilValue(gameScore);
  const resetScore = useResetScore();
  return (
    <div>
      <h3>Score: {score}</h3>
      <button onClick={resetScore}>Reset Score</button>
    </div>
  );
};

export default Score;
