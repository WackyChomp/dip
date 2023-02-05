import React, { useState, useEffect } from 'react';

import { Card, FormField, Loader } from '../components';




const RenderCards = ({ data, title }) => {
  if(data?.length > 0 ) {
    return data.map((post) => <Card key={post._id} {...post} />)
  }

  return (
    <h2 className='mt-5 font-bold text-[purple] text-xl uppercase'>
      {title}
    </h2>
    )

}

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState('asdf');


  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[gold] text-[32px]'>The Community</h1>
        <p className='mt-2 text-[black] text-[15px] max-w[500px]'>
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

              <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                {searchText ? (
                  <RenderCards 
                    data={[]}         //'searchedResults'
                    title='No search results :('
                  />
                ) :(
                  <RenderCards
                    data={[]}        //'allPosts'
                    title='No Posts found at all'
                  />
                )}
              </div>
            </>
          )
        }
      </div>
    </section>
  )
}

export default Home