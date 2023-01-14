import React from "react";
import "./Sub.css";

const Sub = ({ plan, theme, price, isBasic, isPro, isMaster }) => {
  return (
    <div className="price-box --card">
      <div className={`box --p2 ${theme}`}>
        <p className="--text-light">{plan}</p>
        <h4 className="--text-light">
          <span>$</span>
          <span className="basic">{price}</span>
        </h4>
      </div>
      <div className="features">
        <ul>
          <li>Unlimited paged</li>
          <li>Unlimited bandwidth</li>
          <li>500Gb storage</li>
        </ul>
        <button className={`btn ${theme}`}>Buy now</button>
      </div>
    </div>
  );
};

export default Sub;
