import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByDate, filterByType } from "../reducers/productReducer";

const FilterButton = ({
  content,
  values,
  isButton,
  setIsButton,
  filterType,
}) => {
  const handleClick = () => {
    setIsButton((prev) => !prev);
  };

  const [selectedOption, setSelectedOption] = useState(content);
  const dispatch = useDispatch();

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    console.log(value);
    setIsButton(false); // Close the dropdown after selection

    if (filterType === "date") {
      dispatch(filterByDate(value));
    } else if (filterType === "type") {
      dispatch(filterByType(value));
    } // Close the dropdown after selection
  };

  const handleDateChange = (date) => {
    dispatch(filterByDate(date));
  };

  const handleTypeChange = (type) => {
    dispatch(filterByType(type));
  };

  return (
    <div className="relative mt-4 mb-4 ">
      <div className="btn-primary shadow-md">
        <button
          type="button"
          onClick={handleClick}
          className=" text-white rounded-md "
        >
          {selectedOption}
        </button>
      </div>
      {isButton && (
        <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white">
          <form action="#" className="p-2">
            <select
              name={filterType}
              id={filterType}
              onChange={handleSelectChange}
              value={selectedOption}
              className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
            >
              {values.map((currElem, index) => (
                <option key={index} value={currElem}>
                  {currElem}
                </option>
              ))}
            </select>
          </form>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
