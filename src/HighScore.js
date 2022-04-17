import { useRecoilValue } from "recoil";
import { highScores } from "./selectors";
const HighScore = () => {
  const score = useRecoilValue(highScores);
  return (
    <div>
      <h2>High Score: {score}</h2>
    </div>
  );
};

export default HighScore;
