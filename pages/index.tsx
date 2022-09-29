import type { NextPage } from 'next';
import FactList from '../components/FactList';

import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <FactList />
    </div>
  );
};

export default Home;
