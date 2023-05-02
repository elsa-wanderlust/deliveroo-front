import ValidateCart from "./ValidateCart";
import CartDetails from "./CartDetails";
import Total from "./Total";

const Cart = ({ cart, setCart }) => {
  return (
    <div className="cart">
      <section>
        <ValidateCart cart={cart} />
      </section>
      <section>
        {cart.map((elem, index) => {
          return (
            <CartDetails
              key={elem.name}
              index={index}
              item={elem.name}
              price={elem.price}
              quantity={elem.quantity}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
      </section>
      <section>
        <Total cart={cart} />
      </section>
      {cart.length === 0 && <p>Votre panier est vide</p>}
    </div>
  );
};
export default Cart;
