const jsonFormatter = (value) => {
  const condition1 = value.replace(/[{]/g, '');
  const condition2 = condition1.replace(/[}]/g, '');
  const condition3 = condition2.replace(/[:]/g, ': ');
  const condition4 = condition3.replace(/[,]/g, '<br />');
  const condition5 = condition4.replace(/[[]/g, '');
  const condition6 = condition5.replace(/[\]]/g, '');
  const final = condition6.replace(/["]/g, '');
  return final;
};

export default jsonFormatter;
