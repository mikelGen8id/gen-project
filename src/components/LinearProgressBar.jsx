import COLORS from "../constants/colors";

const LinearProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 h-2 rounded" style={{backgroundColor:COLORS.gray}}>
      <div
        className="h-2 rounded"
        style={{ width: `${progress}%`, backgroundColor:COLORS.blue }}
      />
    </div>
  );
}

export default LinearProgressBar;
