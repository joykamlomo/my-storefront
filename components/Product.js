import Image from 'next/image';
import React from 'react';

function Product({ id, title, price, description, category, image }) {
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} alt={title} height={200} width={200} />

      <h4 className="my-3 text-sm">{title}</h4>
      <p className="mb-5">{price}</p>

      <button className="mt-auto button">Add to cart</button>
    </div>
  );
}

export default Product;
