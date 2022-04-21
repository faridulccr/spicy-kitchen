import Classes from "../../assets/styles/ProgressBar.module.css";
import Button from "../Button";
import { useRef, useState } from "react";

const ProgressBar = ({ nextFunc, prevFunc, submit, percentage }) => {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef(); // for create a ref in tooltip element

  const tootipToggler = () => {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${percentage}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  };

  /*
  const mouseOverHandler = () => {
    tooltipRef.current.style.left = `calc(${percentage}% - 65px)`;
    tooltipRef.current.style.display = "block";
  };

  const mouseOutHandler = () => {
    tooltipRef.current.style.display = "none";
  }; */

  /* this approach is not recommended for dom manipulation
  useEffect(() => {
    const progressBar = document.querySelector(`.${Classes.progress}`);
    const tooltip = document.querySelector(`.${Classes.tooltip}`);

    progressBar.addEventListener("mouseover", () => {
      tooltip.style.display = "block";
    });
    progressBar.addEventListener("mouseout", () => {
      tooltip.style.display = "none";
    });
  },[]); */

  return (
    <div className={Classes.progressBar}>
      <div className={Classes.backButton} onClick={prevFunc}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>

      <div className={Classes.rangeArea}>
        <div ref={tooltipRef} className={Classes.tooltip}>
          {percentage}% Complete!
        </div>
        <div className={Classes.rangeBody}>
          <div
            className={Classes.progress}
            style={{ width: `${percentage}%` }}
            onMouseOver={tootipToggler}
            onMouseOut={tootipToggler}
          ></div>
        </div>
      </div>

      <Button
        className={Classes.next}
        onClick={percentage === 100 ? submit : nextFunc}
      >
        {percentage === 100 ? (
          <span>Submit</span>
        ) : (
          <>
            <span>Next Question</span>
            <span className="material-icons-outlined"> arrow_forward </span>
          </>
        )}
      </Button>
    </div>
  );
};

export default ProgressBar;
