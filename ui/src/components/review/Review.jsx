import React from "react";
import "./review.scss";
import { useQuery } from "@tanstack/react-query";
import createRequest from "../../utils/newRequest";

const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      createRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });

  // console.log(review);

  return (
    <div className="review">
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="user">
          <img className="pp" src={data.image || "/img/noavatar.png"} alt="" />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
              {/* <img
                src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png"
                alt=""
              /> */}
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img src="/img/star.png" key={i} alt="" />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>

      <div className="helpful">
        <span>Helpful?</span>
        <img src="/img/like.png" alt="" />
        <span>Yes</span>
        <img src="/img/dislike.png" alt="" />
        <span>No</span>
      </div>
    </div>
  );
};

export default Review;
