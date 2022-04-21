import Classes from "../../assets/styles/Summary.module.css";
import image from "../../assets/images/success.png";
import useFetch from "../../../hooks/useFetch";

const Summary = ({ totalScore, score }) => {
  const keyword_of_image = () => {
    const percentageOfScore = (score / totalScore) * 100;

    if (percentageOfScore < 50) {
      return "failed";
    } else if (percentageOfScore < 75) {
      return "good";
    } else if (percentageOfScore < 100) {
      return "better";
    } else {
      return "excellent";
    }
  };
  const imageKeyword = keyword_of_image();

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${imageKeyword}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );

  const imageFromPexels = result?.photos[0]?.src.medium; // return a url for image
  // result && result.photos[0] && result.photos[0].src.medium

  return (
    <div className={Classes.summary}>
      <div className={Classes.point}>
        {/* progress bar will be placed here */}
        <p className={Classes.score}>
          Your score is <br />
          {score} out of {totalScore}
        </p>
      </div>

      {loading && <div className={Classes.badge}>Loading your badge...</div>}
      {error && (
        <div className={Classes.badge}>there was an error in your badge!</div>
      )}
      {!loading && !error && (
        <div className={Classes.badge}>
          <img
            src={imageFromPexels || image}
            alt={imageKeyword}
            title={imageKeyword.toUpperCase()}
          />
        </div>
      )}
    </div>
  );
};

export default Summary;
