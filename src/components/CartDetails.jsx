import FormatPrice from "../utils/FormatPrice";

const CartDetails = (props) => {
  const { index, item, price, quantity, cart, setCart } = props;
  const total = (price * quantity).toFixed(2);
  // reduce the qty per item, if the qty is equal at 0, it will remove it from the cart
  const handleMinus = () => {
    const copyCart = [...cart];
    copyCart[index].quantity--;
    if (copyCart[index].quantity === 0) {
      copyCart.splice(index, 1);
      setCart(copyCart);
    }
    setCart(copyCart);
  };
  const handlePlus = () => {
    const copyCart = [...cart];
    copyCart[index].quantity++;
    setCart(copyCart);
  };

  return (
    <section className={quantity === 0 ? "itemsInCart hidden" : "itemsInCart"}>
      <div>
        <div className="adjustQty">
          <button onClick={handleMinus}>-</button>
          <span>{quantity}</span>
          <button onClick={handlePlus}>+</button>
        </div>
        <p>{item}</p>
      </div>
      <p>{FormatPrice(total)}</p>
    </section>
  );
};
export default CartDetails;
