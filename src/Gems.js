import { useRecoilValue } from "recoil";
import { gameScore } from "./atoms";

const Gems = () => {
  const score = useRecoilValue(gameScore);
  return (
    <div>
      <h3>
        {
          [...Array(score)].map((n, i) => {
            return <span key={i}>💎</span>;
          })
        }</h3>
    </div>
  );
};

export default Gems;
