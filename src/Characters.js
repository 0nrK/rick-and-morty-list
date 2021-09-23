import React from 'react';
import Card from './Card';

const Characters = ({ data }) => {


    return (
        <div className="mx-auto">
            {data.map((char) => {
                return (<Card key={char.id} gender= {char.gender} species={char.species} img={char.image} name={char.name} status={char.status} />)
            })}
        </div>)

}

export default Characters
