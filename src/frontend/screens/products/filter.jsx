import { useProduct } from "frontend/context";
import React, { useState } from "react";

export const Filter = () => {
  const { productDispatch } = useProduct();
  const [checked, setChecked] = useState({
    highToLow: false,
    lowToHigh: false,
  });
  return (
    <div className="filters">
      <div className="filter-title">
        <p>Filters</p>
        <button
          onClick={() => {
            setChecked({
              highToLow: false,
              lowToHigh: false,
            });
            productDispatch({ payload: "", action: "CLEAR-FILTER" });
          }}
        >
          Clear
        </button>
      </div>
      {/* Rate filters */}
      <div>
        <input
          onClick={() => {
            setChecked({
              highToLow: true,
              lowToHigh: false,
            });
            productDispatch({ payload: "", action: "HIGH-TO-LOW" });
          }}
          checked={checked.highToLow}
          type="radio"
          name=""
          id="hight-to-low"
        />
        <label htmlFor="hight-to-low">High to Low</label>
      </div>
      <div>
        <input
          onClick={() => {
            setChecked({
              highToLow: false,
              lowToHigh: true,
            });
            productDispatch({ payload: "", action: "LOW-TO-HIGH" });
          }}
          checked={checked.lowToHigh}
          type="radio"
          name=""
          id="low-to-high"
        />
        <label htmlFor="low-to-high">Low to High</label>
      </div>

      {/* Slider */}
      <div>
        <input
          onChange={(e) => {
            console.log(e.target.value);
            productDispatch({ payload: e.target.value, action: "RANGE" });
          }}
          type="range"
          min={1000}
          max={10000}
          name=""
          id=""
        />
      </div>

      {/* Category */}

      <div>
        <input
          onChange={(e) =>
            e.target.checked
              ? productDispatch({ payload: "mens", action: "CATEGORY-FILTER" })
              : productDispatch({
                  payload: "",
                  action: "CLEAR-FILTER",
                })
          }
          type="checkbox"
          name=""
          id="men"
        />
        <label htmlFor="hight-to-low">Mens</label>
      </div>
      <div>
        <input
          onChange={(e) =>
            e.target.checked
              ? productDispatch({
                  payload: "women",
                  action: "CATEGORY-FILTER",
                })
              : productDispatch({
                  payload: "",
                  action: "CLEAR-FILTER",
                })
          }
          type="checkbox"
          name=""
          id="women"
        />
        <label htmlFor="hight-to-low">Womens</label>
      </div>
      <div>
        <input
          onChange={(e) =>
            e.target.checked
              ? productDispatch({
                  payload: "kids",
                  action: "CATEGORY-FILTER",
                })
              : productDispatch({
                  payload: "",
                  action: "CLEAR-FILTER",
                })
          }
          type="checkbox"
          name=""
          id="kids"
        />
        <label htmlFor="hight-to-low">Kids</label>
      </div>
    </div>
  );
};
