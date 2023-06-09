// adds 2 digits (only if num is a number), replace dot by comma and add '€' sign
const FormatPrice = (num) => {
  if (typeof num === "number") {
    const newNum = num.toFixed(2).replace(".", ",");
    return `${newNum} €`;
  } else {
    const newNum = num.replace(".", ",");
    return `${newNum} €`;
  }
};
export default FormatPrice;
