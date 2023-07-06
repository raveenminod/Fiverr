import React, { useState, useRef } from "react";
import "./gigs.scss";
// import { gigs } from "../../data"; dummy data
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import createRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();

  const {search} = useLocation();

// gigs?cat=&min=10&search=gig 4

  const { isLoading, error, data } = useQuery({
    queryKey: ["gigsData"],
    queryFn: () => createRequest.get(`/gigs${search}`).then(res=>{
      return res.data;
    }),
  });

  // console.log(location);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  // console.log(sort);

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FIVERR &gt; GRAPHIC & DESIGN &gt;</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* cards section */}
        <div className="cards">
          {isLoading
            ? "Loading..."
            : error
            ? "Somthing went wrong!"
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
