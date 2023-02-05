import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    </section>
  )
}

export default CreatePost