import React, { useState, useEffect } from 'react';

import { Card, FormField, Loader } from '../components';

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState('asdf');


  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[gold] text-[32]'>The Community</h1>
        <p className='mt-2 text-[#666e75] text-[15px] max-w[500px]'>
          Browse through the gallery of AI generated images
        </p>
      </div>

      <div className='mt-16'>
        <FormField />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
          ) : (
            <>
              {searchText && (
                <h2 className='font-medium text-[red] text-xl mb-3'>
                  Showing Results:
                  <span className='text-[greenyellow]'>
                    {searchText}
                  </span>
                </h2>

              )}
            </>
          )
        }
      </div>
    </section>
  )
}

export default Home