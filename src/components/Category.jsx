import Meals from "./Meals";

const Category = ({ category, cart, setCart }) => {
  return (
    <>
      <h2>{category.name}</h2>
      <div className="categoryMeals">
        {category.meals.map((elem) => {
          return (
            <Meals
              key={elem.id}
              mealDetails={elem}
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
