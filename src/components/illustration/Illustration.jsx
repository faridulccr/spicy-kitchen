import "./Illustration.style.scss";

const Illustration = ({image}) => {
  return (
    <div className="illustration">
      <img src={image} alt="Signup" />
    </div>
  );
};

export default Illustration;
