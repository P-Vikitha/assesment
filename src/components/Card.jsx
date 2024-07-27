import React from "react";
import { convertTimestampToDate } from "../util/convertDate";

const Card = ({ item }) => {
  return (
    <div className="flex flex-col p-2 m-2 bg-[#e0d9cf] border rounded-md shadow-md ">
      <div className="items-center justify-center  ">
        <img
          className="w-37 h-37  rounded-lg object-cover "
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="m-2 flex flex-col items-start">
        <div className="mb-2 text-wrap">
          <h3 className="text-md font-medium">{item.title}</h3>
          <p className="">{item.description}</p>
        </div>
        <div>
          <p>Date: {convertTimestampToDate(item.date)}</p>
          <p>Location: {item.location}</p>
          <p>
            Price: <span>${item.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
