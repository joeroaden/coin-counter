export  const coinCounter = (counter) => {
  // counter = Math.ceil(counter.toFixed(2) * 100) / 100;
  if (isNaN(counter)) {
    return counter;
  }
  if (counter <= 0) {
    return counter;
  }
  if (counter >= .25) {
    const quarterCount = Math.floor(counter.toFixed(2) /.25);
    return `Quarters: ${quarterCount}, ` + coinCounter(counter -(quarterCount * .25));
  }
  console.log(counter);
  if (counter >= .10 && counter <.25) {
    const dimeCount = Math.floor(counter.toFixed(2) /.10);
    return `Dimes: ${dimeCount},` + coinCounter(counter - (dimeCount * .10));
  }
  if (counter >= .05 && counter <.05) {
    const nickelCount = Math.floor(counter.toFixed(2) /.05);
    return `Nickels: ${nickelCount},` + coinCounter(counter - (nickelCount * .05));
  }
  if (counter >= 0 && counter < .05){
    return `Pennies: ${Math.ceil(counter.toFixed(2))}`;
  }
  // return `Pennies: ${Math.ceil(counter.toFixed(2))}`;
};


