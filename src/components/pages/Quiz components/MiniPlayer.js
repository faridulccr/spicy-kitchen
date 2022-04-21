import Classes from "../../assets/styles/MiniPlayer.module.css";
import { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";

const MiniPlayer = ({ videoID, title }) => {
  const [open, setOpen] = useState(false);
  const floatingBtnRef = useRef();
  // const closeBtnRef = useRef();
  const videoUrl = `https://www.youtube.com/watch?v=${videoID}`;

  const miniPlayerToggler = () => {
    if (open) {
      setOpen(false);
      floatingBtnRef.current.classList.add(Classes.floatingBtn);
    } else {
      setOpen(true);
      floatingBtnRef.current.classList.remove(Classes.floatingBtn);
    }
  };

  /*
  useEffect(() => {
    //element.addEventListener(event, function, useCapture)
    // for useCapture:
    //  Optional (default = false).
    // false - The callback is executed in the bubbling phase.(age child then parent)
    // true - The callback is executed in the capturing phase.(age parent then child) 

    // duita function er porei true othoba false use korte hobe

    floatingBtnRef.current.addEventListener(
      "click",
      function () {
        this.classList.remove(Classes.floatingBtn);
      },
      true
    );

    closeBtnRef.current.addEventListener(
        "click",
        function () {
          this.parentNode.classList.add(Classes.floatingBtn);
        },
        true
      );
  }, []); */

  return (
    <div
      className={`${Classes.miniPlayer} ${Classes.floatingBtn}`}
      ref={floatingBtnRef}
    >
      <span
        className={`material-icons-outlined ${Classes.open}`}
        onClick={miniPlayerToggler}
      >
        play_circle_filled
      </span>
      <span
        className={`material-icons-outlined ${Classes.close}`}
        onClick={miniPlayerToggler}
      >
        close
      </span>

      <ReactPlayer
        className={Classes.video}
        url={videoUrl}
        width="300px"
        height="168px"
        controls
        playing={open}
        volume={0.5}
      />
      <p style={{ color: "#fff" }}>{title}</p>
    </div>
  );
};

export default MiniPlayer;
