import FormatPrice from "../utils/FormatPrice";

const Total = ({ cart }) => {
  let subTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subTotal += parseFloat(cart[i].price) * cart[i].quantity;
    console.log(typeof cart[i].price);
  }
  const deliveringFee = 2.5;
  return (
    <div className={subTotal === 0 ? "hidden" : ""}>
      <div className="SubTotalAndFee">
        <div>
          <p>Sous-total</p>
          <p>{FormatPrice(subTotal)}</p>
        </div>
        <div>
          <p>Frais de libraison</p>
          <p>{FormatPrice(deliveringFee)}</p>
        </div>
      </div>
      <div className="Total">
        <p>Total</p>
        <p>{FormatPrice(subTotal + deliveringFee)}</p>
      </div>
    </div>
  );
};
export default Total;
