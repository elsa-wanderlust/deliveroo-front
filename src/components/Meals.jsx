import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormatPrice from "../utils/FormatPrice";

const Meals = ({ mealDetails, cart, setCart }) => {
  const { title, description, price, picture, popular } = mealDetails;
  // if item already in the cart, increases quantity by one, if not, adds it to the cart with a quantity of 1
  const handleClick = () => {
    const copyCart = [...cart];
    let alreadyInCart = false;
    for (let i = 0; i < copyCart.length; i++) {
      if (copyCart[i].name === title) {
        alreadyInCart = true;
        copyCart[i].quantity++;
        setCart(copyCart);
      }
    }
    if (alreadyInCart === false) {
      copyCart.push({ name: title, price: price, quantity: 1 });
      setCart(copyCart);
    }
  };
  return (
    <div className="aMeal" onClick={handleClick}>
      <div className="leftSection">
        <h3>{title}</h3>
        <p className={!description && "hidden"}>{description}</p>
        <div className="price">
          <p>{FormatPrice(price)}</p>
          {popular && (
            <p className="popular">
              <FontAwesomeIcon icon="star" />
              &nbsp; Populaire
            </p>
          )}
        </div>
      </div>
      {picture && <img src={picture} alt={`picture of ${title}`} />}
    </div>
  );
};

export default Meals;
