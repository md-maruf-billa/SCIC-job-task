import React from 'react';
import Banner from '../../Components/HomePageComponents/Banner/Banner';
import PopularProducts from '../../Components/HomePageComponents/PopularProducts';

const Home = () => {
  return (
    <div>
      <Banner />

      <PopularProducts/>
    </div>
  );
};

export default Home;