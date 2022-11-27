import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({ id, title, price, description, category, image }) {
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
    <div className="grid grid-cols-5">
      <Image src={image} alt={''} height={50} width={50} />
      {/* middle section */}
      <div className="col-span-3 mx-5">
        <p className="text-md font-medium">{title}</p>
        <p className="text-xs my-2">{description}</p>
        <h4 className="text-lg font-semibold">{price}</h4>
      </div>

      {/* sddn remove buttons */}
      <div>
        <PlusIcon onClick={addItemToBasket} className="h-5 w-5 text-black" />
        <MinusIcon
          onClick={removeItemFromBasket}
          className="h-5 w-5 text-black"
        />
      </div>
    </div>
  );
}

export default CheckoutProduct;
