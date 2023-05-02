import FormatPrice from "../utils/FormatPrice";

const CartDetails = ({ index, itemDetails, cart, setCart }) => {
  const { name, price, quantity } = itemDetails;
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
  // increases the quantity
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
        <p>{name}</p>
      </div>
      <p>{FormatPrice(price * quantity)}</p>
    </section>
  );
};
export default CartDetails;
