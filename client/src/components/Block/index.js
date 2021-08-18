import React from 'react';

import { round } from 'utils';

const Block = ({ title, currencyArr, currencyMin }) => {
  return (
    <div className="col">
      <span>{title}</span>

      {currencyArr.length ? (
        currencyArr.map((el, index) => (
          <span key={index} className={currencyMin === el && 'min'}>
            {round(el, 3)}
          </span>
        ))
      ) : (
        <>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </>
      )}
    </div>
  );
};

export default Block;
