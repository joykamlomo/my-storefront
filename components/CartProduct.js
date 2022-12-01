import { TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CartProduct({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = { id, title, price, description, category, image };

    // sending item as action to redux store
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div class="flex flex-row space-x-4">
      <div class="bg-white w-40 h-28 p-2 flex justify-center items-centers rounded-3xl">
        <Image src={image} alt={''} height={1000} width={1000} />
      </div>

      <div class="flex flex-col py-2 w-full">
        <div>
          <h2 class="text-gray-900 tracking-wider py-1">{title}</h2>
        </div>
        <div>
          <p class="text-yellow-700 tracking-wider py-1 text-sm">MK{price}</p>
        </div>
        <div class="flex justify-between w-full items-center mt-4">
          <div class="space-x-4 flex flex-row">
            <button
              onClick={removeItemFromBasket}
              class="border border-gray-300 h-5 w-5 flex justify-center items-center rounded"
            >
              -
            </button>
            <span>1</span>
            <button
              onClick={addItemToBasket}
              class="border border-gray-300 h-5 w-5 flex justify-center items-center rounded"
            >
              +
            </button>
          </div>
          <div>
            <TrashIcon className="h-5 w-5 text-yellow-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
