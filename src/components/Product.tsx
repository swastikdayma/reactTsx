import React from 'react';

interface ProductProps {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ name, description, imageUrl, price }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover mb-4 rounded-md" />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-800 font-bold">${price.toFixed(2)}</p>
    </div>
  );
};

export default Product;
