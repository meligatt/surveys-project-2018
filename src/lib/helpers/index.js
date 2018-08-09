export const setValueAsPercentage = (value) => {
  if(isNaN(value)){
    throw new Error("Value is not a number");
  }
 return (value * 100).toFixed(0);
}

export const roundToNearestInteger = (value) => {
  if(isNaN(value)){
    throw new Error("Value is not a number");
  }
  return Math.round(value);
}
