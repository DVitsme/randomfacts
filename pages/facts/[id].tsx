import React from 'react';
import { NextPage } from 'next';
import FactHero from '../../components/FactHero';
import SingleFactDisplay from '../../components/SingleFactDisplay';

const SingleFact: NextPage = () => {
  return (
    <>
      <FactHero />
      <SingleFactDisplay />
    </>
  );
};

export default SingleFact;
