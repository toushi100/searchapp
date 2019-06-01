import React from 'react';
import './imagelist.css'
import ImageCard from './imageCard';

const imagelist = props => {
    const images = props.images.map(image =>{
        return <ImageCard key={image.id} image={image}/>
    });
    return <div className="image-list ui segment">
        {images}
    </div>
};

export default imagelist;