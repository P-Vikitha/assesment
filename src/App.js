import React, { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { dates } from "./util/dates";
import FilterButton from "./components/FilterButton";
import { searchtype } from "./util/searchtype";
import ProductSection from "./components/ProductSection";
import { useDispatch, useSelector } from "react-redux";
import { dummyData } from "./util/data";
import { searchProducts, setProducts } from "./reducers/productReducer";

const App = () => {
  const [isDateButton, setIsDateButton] = useState(false);
  const [isTypeButton, setIsTypeButton] = useState(false);
  const [range, setRange] = useState(3);

  const dispatch = useDispatch();

  useEffect(() => {
    // Assume fetchProducts is a function that fetches your product data
    const fetchProducts = async () => {
      // Replace this with your actual fetch logic
      dispatch(setProducts(dummyData));
    };

    fetchProducts();
  }, [dispatch]);

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    dispatch(searchProducts(event.target.value));
  };

  const handleRangeChange = useCallback((delta) => {
    setRange((prev) => Math.max(0, prev + delta));
  }, []);
  useEffect(() => {}, [isDateButton, isTypeButton, range]);

  return (
    <>
      {/* Header section */}
      <section>
        <Navbar />
      </section>

      {/* Section for main image */}
      <section className="sm:block">
        <Hero />
      </section>

      {/* Section for buttons */}
      <section className="flex flex-col sm:flex-row justify-between mt-4">
        <div className='ml-3 flex flex-col gap-4 sm:flex-row'>
          <FilterButton
            content={'Filter By Date'}
            values={dates}
            isButton={isDateButton}
            setIsButton={setIsDateButton}
            filterType='date'
          />
          <FilterButton
            content={'Filter By Type'}
            values={searchtype}
            isButton={isTypeButton}
            setIsButton={setIsTypeButton}
            filterType='type'
          />
        </div>
        <div className="mr-3 my-auto py-2 text-white sm:flex-row ">
          <input
            type="search"
            className="btn-primary shadow-md"
            placeholder="Seach retreat by Title"
            onChange={handleSearchChange}
            onSubmit={handleSearchChange}
          />
        </div>
      </section>
      <section>
        <ProductSection range={range} setRange={setRange} />
      </section>
      <section className="flex justify-center m-2 p-2 mt-3 mb-4">
        <div className="flex gap-3">
          <button
            type="button"
            className="btn-primary px-8 shadow-lg"
            value={"Previous"}
            onClick={() => handleRangeChange(-3)}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn-primary px-8 shadow-lg"
            value={"Previous"}
            onClick={() => handleRangeChange(3)}
          >
            Next
          </button>
        </div>
      </section>
      <footer className="sticky mb-4">
        <div className="container mx-auto text-center text-gray-700 ">
          © 2024 Wellness Retreats. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default App;
