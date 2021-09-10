import React from 'react';
import Product from '../../templates/Product/Product';
import * as data from '../../assets/products.json';

const Showcase = () => {
  if (!data.products) return null;
  return <Product products={data.products} />;
};

export default Showcase;
