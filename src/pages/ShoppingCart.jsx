import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import CartWrapper from "../components/shopping-cart/CartWrapper";
import { useState } from "react";
import { Trash2 } from 'lucide-react';
import bag from "../assets/arrival-image/bag.png"
import mCard from "../assets/chekout-image/mCard.png";
import paypal from "../assets/chekout-image/paypal.png";
import visa from "../assets/chekout-image/visa.png";

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
        {
          id: 2,
          image: {bag}, 
          name: 'Product Name',
          color: 'Red',
          price: 150.00,
          quantity: 1,
          code: 'r245627',
        },
        {
          id: 3,
          image: {bag}, 
          name: 'Product Name',
          color: 'Red',
          price: 180.00,
          quantity: 1,
          code: 'r245628',
        },
        {
          id: 4,
          image: {bag}, 
          name: 'Product Name',
          color: 'Red',
          price: 120.00,
          quantity: 1,
          code: 'r245629',
        },
        // Add more products here
      ]);
      const [paymentData, setPaymentData] = useState({
        cardNumber: "",
        expirationDate: "",
        securityCode: "",
        cardholderName: "",
      });
      const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
      const handleSubmitPayment = () => {}
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
    <div className="w-[1920px] bg-white">
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
                <div>
                <td className="py-2 px-4">{product.name}</td>
                <span className="pl-12 text-[#5A5C5F]">{product.id}</span>
                </div>
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
                     <Trash2 /> 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
        
      </CartWrapper>
      <div>
      <div className="w-[35%] h-[872px] bg-white p-6 rounded-lg shadow-md border-1 border-[#D9D9D9]">
            <h2 className="text-xl font-bold mb-4 text-center pt-2">
              Order Summary
            </h2>
            <hr className="mt-10 bg-[#C5C5C5]" />
            <div className="space-y-4 pt-8">
              <div className="flex justify-between">
                <span>Price</span>
                <span>$ 196.34</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span>$ 196.34</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$ 196.34</span>
              </div>
              <hr className=" bg-[#C5C5C5]" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$ 196.34</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-16 text-center">Payment</h3>
            <hr className=" bg-[#C5C5C5] mt-6" />
            <div className="flex justify-between mt-8 mb-4">
              <span>Credit Card</span>
              <div className="flex space-x-2">
                <img src={visa} alt="Visa" className="w-8 h-8" />
                <img src={mCard} alt="MasterCard" className="w-8 h-8" />
                <img src={paypal} alt="PayPal" className="w-8 h-8" />
              </div>
            </div>

            <div className="space-y-4 mt-10">
              <input
                type="text"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handlePaymentChange}
                placeholder="Card number"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="expirationDate"
                  value={paymentData.expirationDate}
                  onChange={handlePaymentChange}
                  placeholder="Expiration date (MM/YY)"
                  className="border border-gray-300 p-3 rounded-md w-1/2"
                />
                <input
                  type="text"
                  name="securityCode"
                  value={paymentData.securityCode}
                  onChange={handlePaymentChange}
                  placeholder="Security code"
                  className="border border-gray-300 p-3 rounded-md w-1/2"
                />
              </div>
              <input
                type="text"
                name="cardholderName"
                value={paymentData.cardholderName}
                onChange={handlePaymentChange}
                placeholder="Cardholder name"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>

            <button
              onClick={handleSubmitPayment}
              className="bg-black text-white py-2 px-4 rounded-full w-full mt-10"
            >
              Place Order Now
            </button>
          </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
