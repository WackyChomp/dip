import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../util';
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
    <div>CreatePost</div>
  )
}

export default CreatePost