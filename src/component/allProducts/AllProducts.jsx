import React, { useState } from "react";
import useProductContext from "../../hooks/useProductContext";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";

const AllProducts = () => {
  const { products, isLoading, isError } = useProductContext();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;


  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);
  // console.log(totalPages)

  // Determine the products to display on the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  console.log(startIndex);

  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // Handle pagination
  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const formatCurrency = (price) => {
    return new Intl.NumberFormat("bn-BD", {
      style: "currency",
      currency: "BDT",
      maximumFractionDigits: 2,
    }).format(price / 100);
  };


  return (
    <section className="mt-48">
      <div className="container">
        <h2>All Products</h2>

        {isLoading && <p>Loading products...</p>}
        {isError && <p>Error loading products. Please try again later.</p>}
        {!isLoading && !isError && products.length === 0 && (
          <p>No products available.</p>
        )}

        {!isLoading && !isError && currentProducts.length > 0 && (
          <>
            <ul className="grid grid-cols-1 md:grid-cols-3">
              {currentProducts.map((product) => (
                <li key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <div>
                    <h3>{product.name}</h3>
                    <p>{formatCurrency(product.price)}</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* Pagination */}
            <div className="flex justify-center mt-10 items-center gap-x-10 bg-indigo-700 py-4 rounded-full">
              <button
                className="text-white text-3xl"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                <GiPreviousButton/>
              </button>
              <span className=" text-white text-3xl">
                 {currentPage} of {totalPages}
              </span>
              <button
              className="text-white text-3xl"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                <GiNextButton/>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AllProducts;
