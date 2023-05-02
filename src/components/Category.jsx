import Meals from "./Meals";

const Category = ({ name, mealsDetails, cart, setCart }) => {
  return (
    <>
      <h2>{name}</h2>
      <div className="categoryMeals">
        {mealsDetails.map((elem) => {
          return (
            <Meals
              key={elem.id}
              title={elem.title}
              description={elem.description}
              price={elem.price}
              picture={elem.picture}
              popular={elem.popular}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
      </div>
    </>
  );
};
export default Category;
