const ValidateCart = ({ cart }) => {
  return (
    <div className={cart.length ? "validate full" : "validate empty"}>
      <button>Valider mon panier</button>
    </div>
  );
};
export default ValidateCart;
