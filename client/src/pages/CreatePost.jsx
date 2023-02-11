import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';


const CreatePost = () => {
  const navigate = useNavigate();     // navigate back to homepage after post is created

  const [form, setForm] = useState({
    name:'',
    prompt:'',
    photo:'',
  })

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);



  const handleSubmit = () =>{ }

  
  // Displays text input
  const handleChange = (e) =>{ 
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  //Button randomizes prompt from utils folder
  const handleFunSamplePrompt = () =>{
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt })
  }

  // Calls backend
  const generateImage = () => { }

  
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[gold] text-[32px]'>Creations</h1>
        <p className='mt-2 text-[black] text-[15px] max-w[500px]'>
          Will your idea become a sight to behold or an abomination that
          should not see the light of day through DALL-E AI?
          <br/>
          Share your prompt ideas and pictures at your own <u className='font-bold uppercase text-[crimson]'>discretion</u>
        </p>
      </div>

      <form className='mt-20 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>

          {/* User Info */}
          <FormField 
            labelName='Enter name'
            type='text'
            name='name'
            placeholder='Joe Shmoe'
            value={form.name}
            handleChange={handleChange}
          />

          {/* Prompt Info / contains button to change prompt */}
          <FormField 
            labelName='Enter prompt'
            type='text'
            name='name'
            placeholder='Wheres Waldo inside Roman coliseum surrounded by thousands of people in real life , high resolution'
            value={form.prompt}
            handleChange={handleChange}
            isFunSamplePrompt     // used to show additional button next to prompt
            handleFunSamplePrompt={handleFunSamplePrompt}
          />

          {/* Displays Image */}
          <div className="relative bg-red-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-800 focus:border-blue-500 w-65 p-3 h-65 flex justify-center items-center">
            {form.photo ? (
              <img src={form.photo} alt={form.prompt} 
              className='w-full h-full object-contain'
              />
            ): (
              <img src={preview} alt='preview'
              className='w-9/12 h-9/12 object-contain opacity-40'
              />
            )}

            {/* image darkens and loading animation appears */}
            {generatingImg && (
              <div className='absolute inset-0 z-0 flex justify-content items-center bg-[(0,0,0,0.5)] rounded-lg'>
                <Loader />
              </div>
            )}
          </div>
        </div>

        {/* Image Generating Button */}
        <div className="mt-5 flex gap-5">
          <button
            type='button'
            onClick={generateImage}
            className='text-white bg-yellow-600 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
           >
            {generatingImg ? 'Generating...' : 'Generate' }
          </button>
        </div>

        {/* Community Sharing Button */}
        <div className="mt-10">
          <p className='mt-2 text-[purple] text-[25px] font-bold'>
            After creating your desired image, let's share your creative with the community!
          </p>
          <button
            type='submit'
            className='mt-3 text-white bg-[crimson] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
          >
            {loading ? 'Sharing...' : 'Share with the community'}
          </button>
        </div>

      </form>

    </section>
  )
}

export default CreatePost