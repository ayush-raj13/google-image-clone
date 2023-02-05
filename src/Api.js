import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
        },
        params: {
          query: term
        },
    });

    console.log(response);
    return response.data.results;
};

export default searchImages