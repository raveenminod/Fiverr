import React from "react";
import "./message.scss";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages" className="link">
            FIVERR
          </Link>{" "}
          &gt; RAVEEN MINOD
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/116971341/original/ad2a328163b4c21721a9d8c30f2a95c0103a73f1/design-logo-header-and-thumbnail-for-youtube-channel.jpg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint
              harum inventore, officia vitae dolore dicta molestiae sunt
              mollitia exercitationem ut! Minus reiciendis maiores accusantium
              voluptates obcaecati expedita magnam soluta!
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/116971341/original/ad2a328163b4c21721a9d8c30f2a95c0103a73f1/design-logo-header-and-thumbnail-for-youtube-channel.jpg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint
              harum inventore, officia vitae dolore dicta molestiae sunt
              mollitia exercitationem ut! Minus reiciendis maiores accusantium
              voluptates obcaecati expedita magnam soluta!
            </p>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/116971341/original/ad2a328163b4c21721a9d8c30f2a95c0103a73f1/design-logo-header-and-thumbnail-for-youtube-channel.jpg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint
              harum inventore, officia vitae dolore dicta molestiae sunt
              mollitia exercitationem ut! Minus reiciendis maiores accusantium
              voluptates obcaecati expedita magnam soluta!
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/116971341/original/ad2a328163b4c21721a9d8c30f2a95c0103a73f1/design-logo-header-and-thumbnail-for-youtube-channel.jpg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint
              harum inventore, officia vitae dolore dicta molestiae sunt
              mollitia exercitationem ut! Minus reiciendis maiores accusantium
              voluptates obcaecati expedita magnam soluta!
            </p>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/116971341/original/ad2a328163b4c21721a9d8c30f2a95c0103a73f1/design-logo-header-and-thumbnail-for-youtube-channel.jpg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint
              harum inventore, officia vitae dolore dicta molestiae sunt
              mollitia exercitationem ut! Minus reiciendis maiores accusantium
              voluptates obcaecati expedita magnam soluta!
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/116971341/original/ad2a328163b4c21721a9d8c30f2a95c0103a73f1/design-logo-header-and-thumbnail-for-youtube-channel.jpg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint
              harum inventore, officia vitae dolore dicta molestiae sunt
              mollitia exercitationem ut! Minus reiciendis maiores accusantium
              voluptates obcaecati expedita magnam soluta!
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            id=""
            placeholder="Write a message"
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
