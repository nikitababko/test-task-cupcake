import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { getCurrency } from 'utils';
import { getDataStart, getDataEnd } from 'utils/fetchData';

import { Name, Block } from 'components';

import './index.css';

const App = () => {
  // First
  const [currencyFirst, setCurrencyFirst] = useState();
  const [currencyFirstArr, setCurrencyFirstArr] = useState([]);

  // Second
  const [currencySecond, setCurrencySecond] = useState();
  const [currencySecondArr, setCurrencySecondArr] = useState([]);

  // Third
  const [currencyThird, setCurrencyThird] = useState();
  const [currencyThirdArr, setCurrencyThirdArr] = useState([]);

  const [currencyMin, setCurrencyMin] = useState();

  useEffect(() => {
    getDataStart(setCurrencyFirst, setCurrencySecond, setCurrencyThird);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(1212);
      getDataEnd(setCurrencyFirst, setCurrencySecond, setCurrencyThird);
    }, 200);

    getCurrency(currencyFirst, setCurrencyFirstArr);
    getCurrency(currencySecond, setCurrencySecondArr);
    getCurrency(currencyThird, setCurrencyThirdArr);

    const min = Math.min(
      ...currencyFirstArr,
      ...currencySecondArr,
      ...currencyThirdArr
    );
    setCurrencyMin(min);

    return () => clearInterval(timer);
  }, [currencyFirst, currencySecond, currencyThird]);

  return (
    <div className="main">
      <Name />

      <Block
        title="First"
        currencyArr={currencyFirstArr}
        currencyMin={currencyMin}
      />

      <Block
        title="Second"
        currencyArr={currencySecondArr}
        currencyMin={currencyMin}
      />

      <Block
        title="Third"
        currencyArr={currencyThirdArr}
        currencyMin={currencyMin}
      />
    </div>
  );
};

export default App;
