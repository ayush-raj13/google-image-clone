import React from 'react';
import ImageShow from './ImageShow'

function ImageList({image}) {
    const imageRender = image.map((image) => {
        return <ImageShow key={image.id} url={image.urls.small} desc={image.alt_description} />
    })

    return (
        <div className='lg:columns-6 sm:columns-2 md:columns-4 gap-3'>
            {imageRender}
        </div>
    );
}

export default ImageList