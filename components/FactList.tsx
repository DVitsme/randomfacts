import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import { getDate } from '../utils/getDate';

type Fact = {
  id: string
  text: string  
  source: string
  source_url: string
  language: string
  permalink: string
}

const FactList: NextPage = ({facts}) => {

  return (
    <div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-20">
      <div className="flex justify-center">
        <h2 className="text-center text-3xl font-semibold mb-10 pb-4 border-b-2 w-3/4">
          Past Fun Facts
        </h2>
      </div>
      <ul role="list" className="divide-y divide-gray-200">
        {facts.map((fact) => (
          <li key={fact.id}>
            <Link href={`/facts/${fact.id}`}>
              <a className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-sm font-medium text-indigo-600">
                      {fact.text}
                    </p>
                    <div className="ml-2 flex flex-shrink-0">
                      <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        Source
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-end">
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p>
                        Date Posted:{' '}
                        <time dateTime={getDate}>
                          {getDate}
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default FactList;
