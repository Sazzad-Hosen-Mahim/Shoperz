import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import CartWrapper from "../components/shopping-cart/CartWrapper";
import { useState } from "react";
import { Trash2 } from 'lucide-react';
import bag from "../assets/arrival-image/bag.png"

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
        {
          id: 1,
          image: {bag}, 
          name: 'Product Name',
          color: 'Red',
          price: 120.00,
          quantity: 1,
          code: 'r245626',
        },
        // Add more products here
      ]);

      const handleDelete = (id) =>{
        setCartItems(cartItems.filter(item => item.id !== id))
      };

      const handleQuantityChange = (id, action)=>{
        setCartItems(cartItems.map(item =>{
          if(item.id === id){
            let newQuantity = action === "increase" ? item.quantity+1 : item.quantity -1;
            return {...item, quantity: newQuantity <1 ? 1 : newQuantity}; //ensure quantity is at least 1
          }
          return item;
        }))
      }
  return (
    <div className="w-[1920px]">
      <div className="bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0] h-[437px] flex flex-col items-center justify-center">
        <h1 className="text-[72px] font-bold">Shopping Cart</h1>
        <div>
          <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Shopping Cart</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
      <CartWrapper className={"mt-32 flex justify-center"}>
        <div className="w-[1472px] bg-[#FFFFFF]">
        <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="py-2 px-4">Image</th>
              <th className="py-2 px-4">Product Name</th>
              <th className="py-2 px-4">Color</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Quantity</th>
              <th className="py-2 px-4">Total</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
                </td>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">{product.color}</td>
                <td className="py-2 px-4">${product.price.toFixed(2)}</td>
                <td className="py-2 px-4 flex items-center">
                  <button onClick={() => handleQuantityChange(product.id, 'increase')} className="p-2 bg-gray-200 rounded">
                    +
                  </button>
                  <span className="mx-2">{product.quantity}</span>
                  <button onClick={() => handleQuantityChange(product.id, 'decrease')} className="p-2 bg-gray-200 rounded">
                    -
                  </button>
                </td>
                <td className="py-2 px-4">${(product.price * product.quantity).toFixed(2)}</td>
                <td className="py-2 px-4">
                  <button onClick={() => handleDelete(product.id)} className="text-[#5A5C5F] pl-4">
                     <Trash2 /> {/* Replace with your trash icon */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
      </CartWrapper>
    </div>
  );
};

export default ShoppingCart;
