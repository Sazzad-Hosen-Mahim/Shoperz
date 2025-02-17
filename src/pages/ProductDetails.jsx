import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Divider,
  Image,
  Pagination,
  Radio,
  RadioGroup,
} from "@heroui/react";
import CommonWrapper from "../components/CommonWrapper";
import { StarFilledIcon } from "@radix-ui/react-icons";
import ProductLabelWithValue from "../components/product-details/ProductLabelWithValue";
import { MinusIcon, PlusIcon, ShoppingBagIcon } from "lucide-react";
import NewsletterSection from "../components/closetProducts/NewsletterSection";


const ProductDetails = () => {
  return (
    <div className="bg-white">
      {/* =====Header Section======= */}
      <div className="bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0] flex flex-col items-center">
        <h1 className="text-[72px] font-bold">Product Details</h1>
        <div className="mt-10">
          <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>shop</BreadcrumbItem>
            <BreadcrumbItem>Product Details</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>

      {/* =======product main details======= */}
<CommonWrapper>
<div className="flex gap-5 mt-10">
        {/* image section */}
        <div className="flex flex-col gap-3">
          <Image
            src="/src/assets/product-details/bigBag.png"
            width={700}
            height={700}
          />
          <div className="flex gap-2">
            {Array(4)
              .fill(null)
              .map((item,i) => {
                return (
                  <Image
                    src="/src/assets/product-details/small-bag.png"
                    width={160}
                    height={160}
                    key={i}
                  />
                );
              })}
          </div>
        </div>
        {/* details section */}
        <div>
          {/* rating */}
          <div className="flex items-center gap-5">
            <p className="h-8 font-semibold m-0p-0">Product Name</p>
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <StarFilledIcon color="#FF9000" />
                <StarFilledIcon color="#FF9000" />
                <StarFilledIcon color="#FF9000" />
                <StarFilledIcon color="#FF9000" />
                <StarFilledIcon color="#FF9000" />
              </div>
              <p className="h-6">(4.5/5.0)</p>
            </div>
          </div>
          <Divider className="my-2 color-[#D9D9D9]" />

          <div className="max-w-[750px]">
            <p className="text-[#5A5C5F]">
              Lorem ipsum dolor sit amet consectetur. Odio lorem erat non purus
              pellentesque diam quis. Placerat volutpat massa quam quis.
              Adipiscing a dignissim velit nunc. Eu vel consectetur lorem lectus
              imperdiet.
            </p>
            <div className="mt-4">
              <ProductLabelWithValue label={"Brand"} value={"Fendi"} />
              <ProductLabelWithValue label={"Product Code"} value={"ER4325T"} />
              <ProductLabelWithValue
                label={"Availability"}
                value={"In stock"}
              />
              <RadioGroup
                color="secondary"
                defaultValue="red"
                label="Select Color"
              >
                <div className="flex gap-2">
                  <Radio value="red" color="red" />
                  <Radio value="green" color="green" />
                  <Radio value="blue" color="blue" />
                </div>
              </RadioGroup>
            </div>
            <p className="mt-3 text-[#050505] font-semibold">
              $120.00{" "}
              <span className="text-sm line-through font-normal text-[#5A5C5F]">
                $150.00
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1">
              <Button radius="sm" size="sm" isIconOnly>
                <PlusIcon />
              </Button>
              <Button
                radius="sm"
                size="sm"
                className="bg-transparent border border-gray-300"
              >
                {1}
              </Button>
              <Button radius="sm" size="sm" isIconOnly>
                <MinusIcon />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button radius="full" className="bg-black text-white">
                Add To Cart
              </Button>
              <Button radius="full" className="bg-black text-white" isIconOnly>
                <ShoppingBagIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
</CommonWrapper>

      {/* =======review======= */}
   <CommonWrapper>
   <div className="mt-10">
        <p className="font-semibold">Review</p>
        <Divider className="py-[2px] mt-5" />

        <div className="pt-5 flex flex-col gap-3">
          {Array(10)
            .fill(null)
            .map((item,i) => {
              return (
                <div key={i} className="flex gap-4">
                  <Image
                    src="/src/assets/product-details/person.png"
                    width={100}
                  />
                  <div>
                    <p className="text-sm text-[#141414]">Emmett Torphy</p>
                    <div className="flex gap-2">
                      <StarFilledIcon color="#FF9000" />
                      <StarFilledIcon color="#FF9000" />
                      <StarFilledIcon color="#FF9000" />
                      <StarFilledIcon color="#FF9000" />
                      <StarFilledIcon color="#FF9000" />
                    </div>
                    <p className="text-xs text-[#5A5C5]">
                      Potter ipsum wand elf parchment wingardium. Patronum
                      beaters stand butter wheels squashy owl parchment. Map no
                      time-turner start-of-term frisbees aurors knitted easy
                      lavender errol. Potter ipsum wand elf parchment
                      wingardium. Patronum beaters stand butter wheels squashy
                      owl parchment. Map no time-turner start-of-term frisbees
                      aurors knitted easy lavender errol.
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex items-center justify-center mt-4">
          <Pagination total={5} renderItem={5} page={1} showControls />
        </div>
      </div>
   </CommonWrapper>

      {/* =======Related Product======= */}
   <CommonWrapper>
   <div className="mt-4">
        <h3 className="text-[#141414] font-semibold text-2xl">
          Related Product
        </h3>
        <div className="flex justify-between gap-5 mt-5">
          {Array(4)
            .fill(null)
            .map((item,i) => {
              return (
                <div key={i} className="">
                  <Image
                    src="/src/assets/product-details/medium-image.png"
                    width={350}
                  />
                  <p className="font-semibold">Product Name Here</p>
                  <div className="flex gap-3">
                    <p className="line-through text-sm">$150.00</p>
                    <p className="text-[#141414] text-sm">$120.00</p>
                  </div>
                  <RadioGroup
                    color="secondary"
                    defaultValue="red"
                    label="Select Color"
                  >
                    <div className="flex gap-2">
                      <Radio value="red" color="red" />
                      <Radio value="green" color="green" />
                      <Radio value="blue" color="blue" />
                    </div>
                  </RadioGroup>
                </div>
              );
            })}
        </div>
      </div>
   </CommonWrapper>

      {/* =======News Letter======= */}
      <div className="mt-10">
        <NewsletterSection />
      </div>
    </div>
  );
};

export default ProductDetails;