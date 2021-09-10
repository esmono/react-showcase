import React from 'react';
import Header from '../../molecules/Header/Header';
import Products from '../../organisms/Products/Products';

interface IProductProps {
  products: any[],
}

const Product: React.FC<IProductProps> = ({ products }) => {
  const title = 'Products';
  return (
    <>
      <Header title={title} />
      <Products
        pageSize={5}
        rows={products}
      />
    </>
  );
};

export default Product;
