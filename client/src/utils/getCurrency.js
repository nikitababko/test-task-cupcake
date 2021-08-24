export default (currency, setCurrencyArr) => {
  if (currency) {
    const obj = currency.data.rates;

    let arr = [];

    for (let key in obj) {
      arr.push(Math.abs(obj[key]));
    }

    const rubToCupcake = arr[0] / arr[3];
    const usdToCupcake = arr[1] / arr[3];
    const eurToCupcake = arr[2] / arr[3];
    const rubToUsd = arr[0] / arr[1];
    const rubToEur = arr[0] / arr[2];
    const eurToUsd = arr[2] / arr[1];

    setCurrencyArr([
      rubToCupcake,
      usdToCupcake,
      eurToCupcake,
      rubToUsd,
      rubToEur,
      eurToUsd,
    ]);
  }
};
