import "./Review.css";

const Review = ({ id, name, text, job, img }) => {
  return (
    <div className="review">
      <div className="img-container">
        <img src={img} alt="img" />
      </div>
      <h3 id="author">{name}</h3>
      <p id="job">{job}</p>
      <p id="info">{text}</p>
    </div>
  );
};

export default Review;
