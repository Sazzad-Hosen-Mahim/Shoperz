import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import CartWrapper from "../components/shopping-cart/CartWrapper";

const ShoppingCart = () => {
  cosnt 
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
      <CartWrapper className={"mt-32"}>
        <div className="w-[1472px] bg-[#FFFFFF]">
            
        </div>
      </CartWrapper>
    </div>
  );
};

export default ShoppingCart;
