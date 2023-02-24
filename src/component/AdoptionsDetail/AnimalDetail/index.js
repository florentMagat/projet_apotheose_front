import './styles.scss'
import React from 'react';

const AnimalDetail = ({animal}) => {
    return(
        <div className='animal-card__card'>
            <div className='animal-card__card--gradient'>
                <div 
                style={{backgroundImage:`url(${animal.image})`}} 
                className='animal-card__card--image'
                >
                </div>
            </div>
            <h2 className='animal-card__card--name'>{animal.name}</h2>
            <p className='animal-card__card--resume'>{animal.resume}</p>
        </div>
    )
}

export default AnimalDetail ;