import React from 'react';
import ProductCard from './ProductCard';

const HomeProducts = () => {
  return (
    <div className="pt-14">
      <h2 className="text-2xl font-medium">Popular products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-6 pb-14">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default HomeProducts;
