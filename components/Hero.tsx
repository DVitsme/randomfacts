import { NextPage } from 'next';
import Image from 'next/image';

const Hero: NextPage = () => {
  return (
    <div className="bg-gray-900 clip-background-path">
      <div className="mx-auto max-w-7xl px-4 sm:pt-24 sm:px-6 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h1>
              <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                <span className="block text-gray-50">
                  Generate A Random Fact
                </span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua ad ad non deserunt sunt.
            </p>
            <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <p className="text-base font-medium text-gray-100 mb-4">
                Click the button below to get a cool fact!
              </p>
              <button
                type="submit"
                className="mt-3 w-full rounded-md border border-transparent bg-sky-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
              >
                Generate Fact
              </button>
            </div>
          </div>
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative mx-auto w-full rounded-lg lg:max-w-md">
              <Image
                src="/images/braydon-anderson-wOHH-NUTvVc-unsplash.jpg"
                width={640}
                height={426}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
