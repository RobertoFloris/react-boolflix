import { FaStar, FaRegStar } from "react-icons/fa";

const Stars = ({ vote }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= vote) {
      stars.push(<FaStar />);
    } else {
      stars.push(<FaRegStar />);
    }
  }

  return (
    <div>
      {stars}
    </div>)
};

export default Stars;
