import React from "react";
import "./messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Raveen Minod",
    isSeller: true,
    img: "https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  const message = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est obcaecati perspiciatis ipsam labore at dolorum hic consequuntur, veniam aspernatur, nisi alias, consectetur inventore earum dolore eveniet facilis molestiae eligendi nesciunt!`;

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>

        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Raveen Minod</td>
            <td>
              <Link to="/message/123" className="link">{message.substring(0, 100)}...</Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Raveen Minod</td>
            <td>
              <Link to="/message/123" className="link">{message.substring(0, 100)}...</Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>Raveen Minod</td>
            <td>
              <Link to="/message/123" className="link">{message.substring(0, 100)}...</Link>
            </td>
            <td>1 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
