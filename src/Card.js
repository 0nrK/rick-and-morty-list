import React, { useState } from 'react'
import Characters from './Characters'
import Active from './Active'

const Card = ({ img, name, status, species, gender}) => {

    const [active, setActive] = useState(false)


    const aliveClass = 'h-12 w-21 px-3 py-1 text-white bg-green-700'
    const deadClass = 'h-12 w-21 px-3 py-1 text-white bg-red-900'

    function handleActive() {
        setActive(!active);
    }
    return (
        <>
        {active ? <Active handleActive={handleActive} img={img}  gender={gender} name = {name} species = {species} status = {status} aliveClass = {aliveClass} deadClass = {deadClass}/> :
            <div className="max-w-sm  mx-10 inline-block my-10 rounded overflow-hidden cursor-pointer shadow-lg" onClick={handleActive}>
                <img className='max-w-full mx-auto' src={img} alt={name}></img>
                <div className='px-6 py-4'>
                    <h2 className='text-3xl  mr-2'>{name}</h2>
                    <span className={status === 'Alive' ? aliveClass : deadClass}>{status}</span>
                </div>
            </div>    }    
            </>
    )
}

export default Card
