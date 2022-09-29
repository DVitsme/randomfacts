import { NextPage } from 'next';
import Image from 'next/image';

const FactHero: NextPage = () => {
  return (
    <>
      <div className="relative w-screen h-1/2-screen">
        <Image
          priority
          src="/images/braydon-anderson-wOHH-NUTvVc-unsplash.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Fact Title"
        />
      </div>
    </>
  );
};

export default FactHero;
