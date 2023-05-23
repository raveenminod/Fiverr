import React from "react";
import "./gig.scss";
import Slider from "infinite-react-carousel";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">FIVERR &gt; GRAPHIC & DESIGN &gt;</span>
          <h1>I will design youtube package logo and banner header</h1>

          <div className="user">
            <img
              className="pp"
              src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5beb412db9261181bb17e9d8afc63b05-1670003261537/abac8176-7f7e-4ed2-b91b-eba7cebcafed.png"
              alt=""
            />
            <span>Raveen Minod</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>

          {/* slider */}
          <Slider className="slider" slidesToShow={1} arrowsScroll={1}>
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/116971341/original/ad2a328163b4c21721a9d8c30f2a95c0103a73f1/design-logo-header-and-thumbnail-for-youtube-channel.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/116971341/original/f2e8b1dc336cd13ecd3d39df976c55df8e3b6eed/design-logo-header-and-thumbnail-for-youtube-channel.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/286872863/original/47c7d53f0840f838122a9addbe0b31f97e9cdbcd/draw-cartoon-youtube-thumbnail-in-any-style.png"
              alt=""
            />
          </Slider>

          {/* about */}
          <h2>About This Gig</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
            accusamus eos expedita labore illum reprehenderit ipsa error
            doloremque quasi. Dolores culpa fugiat neque accusamus modi corrupti
            cum? Sed, cupiditate maiores? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Hic accusamus eos expedita labore
            illum reprehenderit ipsa error doloremque quasi. Dolores culpa
            fugiat neque accusamus modi corrupti cum? Sed, cupiditate maiores?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
            accusamus eos expedita labore illum reprehenderit ipsa error
            doloremque quasi. Dolores culpa fugiat neque accusamus modi corrupti
            cum? Sed, cupiditate maiores?
          </p>
          {/* seller section */}
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5beb412db9261181bb17e9d8afc63b05-1670003261537/abac8176-7f7e-4ed2-b91b-eba7cebcafed.png"
                alt=""
              />
              <div className="info">
                <span>Raveen Minod</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>

            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Sri Lanka</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, iste. Eligendi eos, nostrum est incidunt velit maiores
                perferendis magni temporibus officia, sapiente aperiam nisi
                soluta molestiae debitis? Quia, nam tenetur?
              </p>
            </div>
          </div>

          {/* review section */}
          <div className="review">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/13e64e76859355858f6b69b841f45f46-1677040069880/7f56b0c9-d34b-4960-a334-daeac048835a.jpg"
                  alt=""
                />
                <div className="info">
                  <span>Raveen Minod</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png"
                      alt=""
                    />
                    <span>United State</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, obcaecati sed, laborum consequuntur error soluta ad
                iusto numquam quae maxime dicta recusandae? Molestiae, nam illum
                officia quos perferendis corporis. Porro!
              </p>

              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/13e64e76859355858f6b69b841f45f46-1677040069880/7f56b0c9-d34b-4960-a334-daeac048835a.jpg"
                  alt=""
                />
                <div className="info">
                  <span>Raveen Minod</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png"
                      alt=""
                    />
                    <span>United State</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, obcaecati sed, laborum consequuntur error soluta ad
                iusto numquam quae maxime dicta recusandae? Molestiae, nam illum
                officia quos perferendis corporis. Porro!
              </p>

              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/13e64e76859355858f6b69b841f45f46-1677040069880/7f56b0c9-d34b-4960-a334-daeac048835a.jpg"
                  alt=""
                />
                <div className="info">
                  <span>Raveen Minod</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png"
                      alt=""
                    />
                    <span>United State</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, obcaecati sed, laborum consequuntur error soluta ad
                iusto numquam quae maxime dicta recusandae? Molestiae, nam illum
                officia quos perferendis corporis. Porro!
              </p>

              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="price">
            <h3>1 Ai generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            praesentium sequi nihil recusandae itaque similique et.
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
