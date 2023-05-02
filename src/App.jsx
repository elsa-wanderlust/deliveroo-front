import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// COMPONENTS
import Header from "./components/Header";
import RestaurantIntro from "./components/RestaurantIntro";
import Category from "./components/Category";
import Cart from "./components/Cart";
// FONT AWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  // STATES
  const [isLoading, setIsLoading] = useState(true); // to store if we have received an answer from the server (TRUE=still waiting)
  const [data, setData] = useState(""); // to store the reply form the server (received via the useEffect) so that we can re-use it later
  const [cart, setCart] = useState([]); // store what's in the cart (item, price, quantity)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serverResponse = await axios.get(
          "https://site--deliveroo-backend--7lpgx9xk8rh5.code.run/"
        );
        setData(serverResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Header />
          <div className="">
            <RestaurantIntro restaurantInfo={data.restaurant} />
          </div>
          <main>
            <div className="container">
              <div className="mealContainer">
                {/* map on each category, and calls components only if there are meals in that category */}
                {data.categories.map((elem) => {
                  if (elem.meals.length !== 0) {
                    return (
                      <Category
                        key={elem.name}
                        category={elem}
                        cart={cart}
                        setCart={setCart}
                      />
                    );
                  }
                })}
              </div>
              <Cart cart={cart} setCart={setCart} />
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
