

const CartWidget = () => {


return (
    <div>
  <button type="button" class="btn btn-primary position-relative">
  🛒
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    1
    <span class="visually-hidden">Productos en carrito</span>
  </span>
</button>
</div>
); 
};

export default CartWidget;