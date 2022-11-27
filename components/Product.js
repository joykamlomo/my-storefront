import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

function Product({ id, title, price, description, category, image }) {
  //
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = { id, title, price, description, category, image };

    // sending item as action to redux store
    dispatch(addToBasket(product));
  };
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} alt={title} height={200} width={200} />

      <h4 className="my-3 text-sm">{title}</h4>
      <p className="mb-5">{price}</p>

      <button onClick={addItemToBasket} className="mt-auto button">
        Add to cart
      </button>
    </div>
  );
}

export default Product;
