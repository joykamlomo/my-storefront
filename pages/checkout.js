import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

function checkout() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* <Banner /> */}
        <h1>i am the checkout</h1>

        {/* <ProductFeed products={products} /> */}
      </main>
    </div>
  );
}

export default checkout;