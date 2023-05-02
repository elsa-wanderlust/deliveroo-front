import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// COMPONENTS
import Header from "./components/Header";
import RestaurantIntro from "./components/RestaurantIntro";
import Category from "./components/Category";
import Cart from "./components/Cart";
import ValidateCart from "./components/ValidateCart";
import CartDetails from "./components/CartDetails";
import Total from "./components/Total";
// FONT AWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  // STATES
  const [isLoading, setIsLoading] = useState(true); // to store if we have received an answer from the server (false=we have received)
  const [data, setData] = useState(""); // to store the reply form the server (received via the useEffect) so that we can re-use it later
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serverResponse = await axios.get(
          "https://site--deliveroo-backend--7lpgx9xk8rh5.code.run/"
        );
        // console.log(serverResponse); // this is what we receive from the above request
        setData(serverResponse.data);
        console.log(serverResponse.data);
        setIsLoading(false); // because we have heard back from the server
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
          <div className="container">
            <RestaurantIntro restaurantInfo={data.restaurant} />
          </div>
          <main>
            <div className="container">
              <div className="mealContainer">
                {data.categories.map((elem) => {
                  return (
                    <Category
                      key={elem.name}
                      name={elem.name}
                      mealsDetails={elem.meals}
                      cart={cart}
                      setCart={setCart}
                    />
                  );
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
