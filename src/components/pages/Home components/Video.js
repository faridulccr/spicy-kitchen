import Classes from "../../assets/styles/Video.module.css";
// import image from "../../assets/images/3.jpg";

const Video = ({ title, noq, id }) => {
  return (
    <div className={Classes.video} >
      {/* youtube theke tar image k access korar upay nicher link e */}
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={Classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Score : {noq * 5}</p>
      </div>
    </div>
  );
};

export default Video;
