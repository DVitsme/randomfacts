import type { InferGetStaticPropsType, NextPage } from 'next';
import { GetStaticProps } from 'next';

import FactList from '../components/FactList';
import Hero from '../components/Hero';

import data from '../data/data.json';

type Fact = {
  id: string;
  text: string;
  source: string;
  source_url: string;
  language: string;
  permalink: string;
};

const Home: NextPage = ({
  facts
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Hero />
      <FactList facts={facts} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const facts: Fact[] = data;

  return {
    props: {
      facts
    }
  };
};

export default Home;
