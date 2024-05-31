import { FC } from "react";
import "./index.css";

interface ProcessingProps {}

const Processing: FC<ProcessingProps> = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Processing;
