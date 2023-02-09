import React from 'react'


{/* destructured properties used in CreatePost page */}
const FormField = ({ handleChange, handleFunSamplePrompt, isFunSamplePrompt, labelName, name, placeholder, type, value }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label 
          htmlFor={name}
          className='block text-sm font-medium text-gray-900'
        >
          {labelName}
        </label>

        {/* only shows button if prop is added to component */}
        {isFunSamplePrompt && (
          <button
            type='button'
            onClick={handleFunSamplePrompt}
            className='font-semibold text-xs bg-[yellowgreen] py-1 px-2 rounded-[5px] text-black'
          >
            Generate
          </button>
        )}
      </div>

      <input type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[red] focus:border-[yellow] outline-none block w-full p-3'
      />
    </div>
  )
}

export default FormField