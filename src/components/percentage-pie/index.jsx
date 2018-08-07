import React from 'react';
const PercentagePie = ({value}) => {
 return (<p>
   participation rate as a percentage: { (value * 100).toFixed(0) }%
   ...pie-chart here...
 </p>);
}
export default PercentagePie;
