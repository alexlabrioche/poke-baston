const getPower = (data) => {
  if (data.length > 0) {
    const reducer = (acc, curVal) => acc + curVal;
    const power = data.map((d) => d.data.base_experience).reduce(reducer);
    return power;
  }
  return 0;
};
export default getPower;
