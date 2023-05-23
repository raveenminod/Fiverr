import React from 'react'
import './orders.scss'
import { Link } from 'react-router-dom'

const Orders = () => {

  const currentUser = {
    id: 1,
    username: "Raveen Minod",
    isSeller: true,
    img: "https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>

        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/116971341/original/ad2a328163b4c21721a9d8c30f2a95c0103a73f1/design-logo-header-and-thumbnail-for-youtube-channel.jpg"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/116971341/original/ad2a328163b4c21721a9d8c30f2a95c0103a73f1/design-logo-header-and-thumbnail-for-youtube-channel.jpg"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/116971341/original/ad2a328163b4c21721a9d8c30f2a95c0103a73f1/design-logo-header-and-thumbnail-for-youtube-channel.jpg"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/116971341/original/ad2a328163b4c21721a9d8c30f2a95c0103a73f1/design-logo-header-and-thumbnail-for-youtube-channel.jpg"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders