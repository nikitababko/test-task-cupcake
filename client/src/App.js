import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { getCurrency } from 'utils';

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

  const getData = async () => {
    try {
      const resFirst = await axios.get(
        'http://localhost:5000/api/v1/first/poll'
      );
      const resSecond = await axios.get(
        'http://localhost:5000/api/v1/second/poll'
      );
      const resThird = await axios.get(
        'http://localhost:5000/api/v1/third/poll'
      );

      setCurrencyFirst(resFirst);
      setCurrencySecond(resSecond);
      setCurrencyThird(resThird);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    getCurrency(currencyFirst, setCurrencyFirstArr);
    getCurrency(currencySecond, setCurrencySecondArr);
    getCurrency(currencyThird, setCurrencyThirdArr);

    const min = Math.min(
      ...currencyFirstArr,
      ...currencySecondArr,
      ...currencyThirdArr
    );
    setCurrencyMin(min);
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
