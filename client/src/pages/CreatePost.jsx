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

  const handleChange = (e) =>{ }

  const handleFunSamplePrompt = () =>{ }


  
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

          {/* Prompt Info */}
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
        </div>
      </form>

    </section>
  )
}

export default CreatePost