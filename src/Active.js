import React from 'react'

const Active = ({ handleActive, img, name, status, species, gender, aliveClass, deadClass }) => {

    return (
        <div className="flex-wrap w-auto w-auto block cursor-pointer shadow-lg flex flex-row " onClick={handleActive}>
                <div className="flex">
                    <img className='max-w-full' src={img} alt={name}></img>
                </div>
                <div className='sm:px-1 px-12 py-4 mx-5 flex flex-col text-3xl'>
                    <h2 className='text-5xl  m-1 text-purple-700 mr-2'>{name}</h2>
                    <span className={status === 'Alive' ? aliveClass : deadClass}>{status}</span>
                    <span className='mt-3 mb-3'>Gender: {gender}</span>
                    <span className='mb-1'>Species: {species}</span>
                </div>
            </div>
    )
}

export default Active
