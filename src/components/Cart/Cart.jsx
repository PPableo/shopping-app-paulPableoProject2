import React from "react";
import "./_Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/15045192/pexels-photo-15045192.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/15045184/pexels-photo-15045184.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Blouse",
      desc: "Se activa si la alumbran la' luce' de neón Su falda rozando mi mahón Sin ropa, pa' mí, te ve' mejor Hasta donde yo 'taba manejó La bellaquera la domina",
      isNew: true,
      oldPrice: 98,
      price: 58,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/15134000/pexels-photo-15134000.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/15031643/pexels-photo-15031643.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Blouse",
      desc: "Notice when you mad, ain't no words, just silence You my favorite color, now you seeing every shade of me You say that I'm trippin, I hit back like, Where you takin' me? Locked in for life, on God, no replacin' me",
      isNew: true,
      oldPrice: 98,
      price: 118,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            {/* NOTE: "?" if there is no "desc" won't work*/}
            {/* NOTE: "substring" JS method limits character length*/}
            <p>{item.desc?.substring(0,50)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            // onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
            <div className="total">
        <span>SUBTOTAL</span>
        <span>$128
            {/* ${totalPrice()} */}
            </span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
    </div>
  );
};

export default Cart;
