import React from 'react'

const SearchArea = ({setText, handleSubmit}) => {
    return (
        <form className=' flex flex-row lg:w-max justify-center shadow-lg  bg-gray-50 px-5 mx-auto py-5 h-min' onSubmit={handleSubmit}>
            <input onChange={e => setText(e.target.value)} className='inline-block h-full py-2 px-3 text-xl ' type='text' placeholder='Search image term'></input>
            <button type='submit' className='bg-green-600 text-white px-4 py-1'>Search</button>
        </form>
    )
}

export default SearchArea
