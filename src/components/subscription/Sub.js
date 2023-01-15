import React from "react";
import "./Sub.css";

const Sub = ({
  plan,
  theme,
  price,
  isBasic,
  isPro,
  isMaster,
  yearly,
  onBuy,
}) => {
  return (
    <div className="price-box --card">
      <div className={`box --p2 ${theme}`}>
        <p className="--text-light">{plan}</p>
        <h4 className="--text-light">
          <span>$</span>
          <span className="basic">{price}</span>
          {yearly && (
            <p className="--text-light">
              <del>30%off</del>
            </p>
          )}
        </h4>
        {isPro && <p className="--text-light">Everthing in Basic, plus</p>}
        {isMaster && <p className="--text-light">Everthing in Pro, plus</p>}
      </div>
      <div className="features">
        <ul>
          {isBasic && <li>Unlimited paged</li>}
          {isBasic && <li>Unlimited bandwidth</li>}
          {isBasic && <li>500Gb storage</li>}

          {isPro && <li>10 Backups</li>}
          {isPro && <li>Email support</li>}
          {isPro && <li>github tool</li>}

          {isMaster && <li>20 Backups</li>}
          {isMaster && <li>Push notification</li>}
          {isMaster && <li>Priority Support</li>}
        </ul>
        <button className={`btn ${theme}`} onClick={onBuy}>
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Sub;
