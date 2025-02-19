import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import NewsletterSection from "../components/closetProducts/NewsletterSection";
import { ChevronDown, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import ArrivalProducts from "../components/ArrivalProducts/ArrivalProducts";
import FilterSection from "../components/side-bar/FilterSection";

const NewArrival = () => {
  const [selected, setSelected] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const options = ["All", "Newest", "Popularity"];

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalProducts = 36; // Example: Assuming 36 products exist
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // Dummy Product Array
  const products = Array.from({ length: totalProducts }, (_, i) => i + 1);

  // Get Current Products for the Page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Pagination Handlers
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0] h-[300px] md:h-[437px] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-[72px] font-bold">New Arrival</h1>
        <div className="mt-6">
          <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>New Arrival</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>

      {/* Sidebar and Sorting Section */}
      <div className="flex flex-col md:flex-row mt-10 px-4 md:px-20">
        {/* Sidebar */}
        <div className="w-full md:w-[349px] md:p-[24px] mb-6 md:mb-0 mr-9">
          <FilterSection />
        </div>

        {/* Main Content Section */}
        <div className="flex-1">
          {/* Sorting Section */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full mb-6">
            <p className="text-gray-700 text-sm md:text-base">There are {totalProducts} products in total</p>

            <div className="relative w-full md:w-auto">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full md:w-40 px-4 py-2 border border-gray-300 rounded-lg bg-[#E5E5E5] text-gray-700"
              >
                {selected}
                <ChevronDown size={20} className="text-gray-500" />
              </button>

              {isOpen && (
                <div className="absolute left-0 mt-2 w-full md:w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {options.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelected(option);
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Grid - 12 Cards per Page */}
          <div className="grid grid-cols-2 md:grid-cols-3  md:gap-0">
            {currentProducts.map((_, index) => (
              <ArrivalProducts key={index} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 md:gap-4 mt-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-300 ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
              }`}
            >
              <ArrowLeft size={18} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border-none ${
                  currentPage === i + 1 ? " text-black font-bold" : "border border-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-300 ${
                currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
              }`}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-12 px-4">
        <NewsletterSection />
      </div>
    </div>
  );
};

export default NewArrival;
