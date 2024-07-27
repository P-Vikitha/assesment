import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const ProductSection = ({ range }) => {
  const [featureData, setFeatureData] = useState([]);
  const productData = useSelector((state) => state.products.filteredProducts);

  useEffect(() => {
    if (range >= 3) {
      setFeatureData(productData.slice(range - 3, range));
    } else {
      setFeatureData(productData.slice(0, 3));
    }
  }, [productData, range]);

  return (
    <div className=" flex flex-col sm:flex-row gap-1">
      {featureData.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
};

export default ProductSection;
