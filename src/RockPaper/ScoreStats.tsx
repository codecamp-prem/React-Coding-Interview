type Props = {
  wins: number;
  losses: number;
};
const ScoreStats = ({ wins, losses }: Props) => {
  return (
    <div className="wins-losses">
      <div className="wins">
        <span className="number">{wins}</span>
        <span className="text">{wins === 1 ? "Win" : "Wins"}</span>
      </div>

      <div className="losses">
        <span className="number">{losses}</span>
        <span className="text">{losses === 1 ? "Loss" : "Losses"}</span>
      </div>
    </div>
  );
};

export default ScoreStats;
