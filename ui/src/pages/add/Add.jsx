import React from "react";
import "./add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do somthing I'm really good at"
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" name="" id="" />
            <label htmlFor="">Upload Images</label>
            <input type="file" name="" id="" multiple />
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              placeholder="Brief description to introduce your service to customer"
            ></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service</label>
            <input type="text" placeholder="e.g. One-Page web design"/>
            <label htmlFor="">Short Desciption</label>
            <textarea name="" id="" cols="30" rows="10" placeholder="Short description of your service"></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" name="" id="" min={1}/>
            <label htmlFor="">Revision Number</label>
            <input type="number" name="" id="" min={1}/>
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder="e.g. page design"/>
            <input type="text" placeholder="e.g. file uploading"/>
            <input type="text" placeholder="e.g. setting up a doamin"/>
            <input type="text" placeholder="e.g. hosting"/>
            <label htmlFor="">Price</label>
            <input type="number" name="" id="" min={1}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
