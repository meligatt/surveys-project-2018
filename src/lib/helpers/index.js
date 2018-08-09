export const setValueAsPercentage = (value) => {
 return (value * 100).toFixed(0);
}

export const roundToNearestInteger = (value) => {
  return Math.round(value);
}
