const RestaurantIntro = ({ restaurantInfo }) => {
  return (
    <div className="restaurantIntro">
      <div className="titleAndDescription container">
        <h1>{restaurantInfo.name}</h1>
        <p>{restaurantInfo.description}</p>
      </div>
      <img src={restaurantInfo.picture} alt="picture restaurant" />
    </div>
  );
};
export default RestaurantIntro;
