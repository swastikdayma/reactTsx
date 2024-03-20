import React from 'react';
import Product from './Product';
import Carousel from './Carousel';
const ProductPage: React.FC = () => {

  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for product 1',
      imageUrl: 'https://images.ctfassets.net/hrltx12pl8hq/2ppk3Ug2z6oFMZY5z8WXnx/75af41f13939954c93de0ff8c1972612/shutterstock_1922207966.jpg?fit=fill&w=120&h=120&fm=webp',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for product 2',
      imageUrl: 'https://images.ctfassets.net/hrltx12pl8hq/1qoVFqqABKxtFRMkUh0v6l/6a9bbdc723ac373f4e44400de87997b2/shutterstock_1734177410__1_.jpg?fit=fill&w=120&h=120&fm=webp',
      price: 29.99,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for product 3',
      imageUrl: 'https://images.ctfassets.net/hrltx12pl8hq/go6z2gBaTMDvTrtoOipOw/3b9d21ff7003ca392a2daeb569d629fc/shutterstock_1802211250.jpg?fit=fill&w=120&h=120&fm=webp',
      price: 39.99,
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Description for product 4',
        imageUrl: 'https://images.ctfassets.net/hrltx12pl8hq/ss2daMHu3XewLBroGgbtp/6cf4fbe1fc297c20ee6cd2bb303e12a1/shutterstock_2390735237.jpg?fit=fill&w=120&h=120&fm=webp',
        price: 39.99,
      },
      {
        id: 5,
        name: 'Product 5',
        description: 'Description for product 5',
        imageUrl: 'https://images.ctfassets.net/hrltx12pl8hq/ss2daMHu3XewLBroGgbtp/6cf4fbe1fc297c20ee6cd2bb303e12a1/shutterstock_2390735237.jpg?fit=fill&w=120&h=120&fm=webp',
        price: 39.99,
      },
      {
        id: 6,
        name: 'Product 6',
        description: 'Description for product 6',
        imageUrl: 'https://images.ctfassets.net/hrltx12pl8hq/go6z2gBaTMDvTrtoOipOw/3b9d21ff7003ca392a2daeb569d629fc/shutterstock_1802211250.jpg?fit=fill&w=120&h=120&fm=webp',
        price: 39.99,
      },
      {
        id: 7,
        name: 'Product 7',
        description: 'Description for product 7',
        imageUrl: 'https://images.ctfassets.net/hrltx12pl8hq/1qoVFqqABKxtFRMkUh0v6l/6a9bbdc723ac373f4e44400de87997b2/shutterstock_1734177410__1_.jpg?fit=fill&w=120&h=120&fm=webp',
        price: 39.99,
      },
      {
        id: 8,
        name: 'Product 8',
        description: 'Description for product 8',
        imageUrl: 'https://images.ctfassets.net/hrltx12pl8hq/2ppk3Ug2z6oFMZY5z8WXnx/75af41f13939954c93de0ff8c1972612/shutterstock_1922207966.jpg?fit=fill&w=120&h=120&fm=webp',
        price: 39.99,
      },
 
  ];

  return (<>
    <Carousel/>
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id}>
            <Product
              name={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
              price={product.price}
            />
            <div className="flex justify-center mt-4 space-x-4">
              <button className="bg-gradient-to-b from-green-700 to-green-600  text-white text-bolder py-2 px-4 rounded">
                Add to Cart
              </button>
              <button className="bg-gradient-to-b from-green-700 to-green-600  text-white py-2 px-4 rounded">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductPage;
