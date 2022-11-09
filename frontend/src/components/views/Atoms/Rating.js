import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";



const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      <span>
        <i
          className={
            value >= 1 ? (
              <BsStarFill />
            ) : value <= 0.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )
          }
        ></i>
      </span>

      <span>
        <i
          className={
            value >= 2 ? (
              <BsStarFill />
            ) : value <= 1.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )
          }
        ></i>
      </span>

      <span>
        <i
          className={
            value >= 3 ? (
              <BsStarFill />
            ) : value <= 2.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )
          }
        ></i>
      </span>

      <span>
        <i
          className={
            value >= 4 ? (
              <BsStarFill />
            ) : value <= 3.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )
          }
        ></i>
      </span>

      <span>
        <i
          className={
            value >= 5 ? (
              <BsStarFill />
            ) : value <= 4.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )
          }
        ></i>
      </span>
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
