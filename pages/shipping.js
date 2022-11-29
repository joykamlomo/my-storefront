import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutWizard from '../components/CheckoutWizard';
import Header from '../components/Header';
import { addShipping, selectShipping } from '../slices/basketSlice';

const Shipping = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  // form
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  // geet items & total from store
  // const shipping = useSelector(selectShipping);

  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch(addShipping({ fullName, address, city, postalCode, country }));
    router.push('/payment');
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="lg:flex flex-col max-w-screen-sm py-5 mx-auto">
        <CheckoutWizard activeStep={1} />

        <div>
          <form onClick={handleSubmit(submitHandler)}>
            <div className="mb-4">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                className="w-full py-3 outline-none border"
                {...register('name', {
                  required: 'Please enter full name',
                })}
              />
              {errors.fullName && (
                <div className="text-red-500">{errors.fullName.message}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                className="w-full py-3 outline-none border"
                {...register('address', {
                  required: 'Please enter full name',
                })}
              />
              {errors.fullName && (
                <div className="text-red-500">{errors.fullName.message}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="city">City</label>
              <input
                id="city"
                className="w-full py-3 outline-none border"
                {...register('city', {
                  required: 'Please enter full name',
                })}
              />
              {errors.fullName && (
                <div className="text-red-500">{errors.fullName.message}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="postalcode">Postal code</label>
              <input
                id="postalcode"
                className="w-full py-3 outline-none border"
                {...register('postalcode', {
                  required: 'Please enter full name',
                })}
              />
              {errors.fullName && (
                <div className="text-red-500">{errors.fullName.message}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="country">Country</label>
              <input
                id="country"
                className="w-full py-3 outline-none border"
                {...register('country', {
                  required: 'Please enter full name',
                })}
              />
              {errors.fullName && (
                <div className="text-red-500">{errors.fullName.message}</div>
              )}
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Shipping;
