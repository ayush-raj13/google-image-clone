import React from 'react';
import { useState } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import searchImages from '../Api';

function App() {
    const [image, setImage] = useState([]);

    const handleSubmit = async (term) => {
        const imageList = await searchImages(term);

        setImage(imageList);
    }

    return (
        <div>
            <SearchBar onEnter={handleSubmit} />
            <ImageList image={image} />
        </div>
    );
}

export default App