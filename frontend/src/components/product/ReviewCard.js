import Rating from "react-rating-stars-component";
import profilePng from "../../images/Profile.png";

const ReviewCard = ({ review }) => {
  const options = {
    edit: false,
    color: "var(--color-yellow-700)",
    activeColor: "var(--color-blue-700)",
    size: window.innerWidth < 600 ? 20 : 25,
    value: review.ratings,
    isHalf: true,
  };

  return (
    <div className="reviewCard">
      <div>
        <img src={profilePng} alt="User" />
        <p>{review.name}</p>
      </div>
      <Rating {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
