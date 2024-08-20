import React from "react";
import useProductContext from "../../hooks/useProductContext";

const FeaturedProduct = () => {
  const { isLoading, featuredProducts, isError } = useProductContext();

  return (
    <section className="">
      <div className="mx-auto container">
        <h2 className="pb-10">Featured Products</h2>

        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>
            An error occurred while fetching the products. Please try again
            later.
          </p>
        ) : featuredProducts.length === 0 ? (
          <p>No featured products available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center">
            {featuredProducts.map((product) => (
              <div key={product.id}>
                <img className="" src={product.image} alt={product.name} />
                <div>
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button>View Details</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProduct;
