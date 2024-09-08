import React from "react";
import "../AllProducts/AllProducts.css";
import all_product from "../Assets/Frontend_Assets/all_product.js";
import Item from "../Item/Item";

export const AllProducts = () => {
  return (
    <div className="new-collections">
      <div className="collections">
        {all_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
