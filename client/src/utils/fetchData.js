import axios from 'axios';

export const getDataStart = async (
  setCurrencyFirst,
  setCurrencySecond,
  setCurrencyThird
) => {
  try {
    const startFirst = await axios.get(`${process.env.REACT_APP_API}/first`);
    const startSecond = await axios.get(`${process.env.REACT_APP_API}/second`);
    const startThird = await axios.get(`${process.env.REACT_APP_API}/third`);

    Promise.all([startFirst, startSecond, startThird]).then(() => {
      setCurrencyFirst(startFirst);
      setCurrencySecond(startSecond);
      setCurrencyThird(startThird);
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDataEnd = async (
  setCurrencyFirst,
  setCurrencySecond,
  setCurrencyThird
) => {
  try {
    const resFirst = await axios.get(`${process.env.REACT_APP_API}/first/poll`);
    const resSecond = await axios.get(
      `${process.env.REACT_APP_API}/second/poll`
    );
    const resThird = await axios.get(`${process.env.REACT_APP_API}/third/poll`);

    Promise.all([resFirst, resSecond, resThird]).then(() => {
      setCurrencyFirst(resFirst);
      setCurrencySecond(resSecond);
      setCurrencyThird(resThird);
    });
  } catch (error) {
    console.log(error);
  }
};
