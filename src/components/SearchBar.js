import {useState} from 'react';

function SearchBar({onEnter}) {
    const [term, setTerm] = useState('')

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onEnter(term);
    }

    return (
        <form className='flex flex-col border-4 border-slate-300 rounded-xl p-6 m-4' onSubmit={handleSubmit}>
            <label>Enter Search Item</label>
            <input className='border-2 border-black' id='search' value={term} onChange={handleChange} />
        </form>
    );
}

export default SearchBar