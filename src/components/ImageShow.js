import React from 'react';

function ImageShow({url, desc}) {
    return (
        <img className='m-3' src={url} alt={desc} />
    );
}

export default ImageShow