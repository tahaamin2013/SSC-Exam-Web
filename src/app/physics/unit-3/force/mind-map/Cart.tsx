import React from "react";

const Cart: React.FC = () => {
  return (
    <div className="relative">
      <div className="w-16 h-10 bg-white border-2 border-black rounded-tr-full rounded-xl">
      </div>
        <div className="absolute -bottom-3 left-1 w-3 h-3 bg-black rounded-full"></div>
        <div className="absolute -bottom-3 right-1 w-3 h-3 bg-black rounded-full"></div>
    </div>
  );
};

export default Cart;
