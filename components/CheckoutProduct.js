import Image from 'next/image';
import React from 'react';

function CheckoutProduct({ id, title, price, description, category, image }) {
  return (
    <div className="grid grid-cols-5">
      <Image src={image} alt={''} height={50} width={50} />
      {/* middle section */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <p className="text-sm my-2">{description}</p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
