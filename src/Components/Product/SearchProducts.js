import '../../Styles/search.css';
import React, { useContext } from 'react';

export default function SearchProducts({ term, setTerm }) {
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    id='term'
                    type='text'
                    role='searchbox'
                    placeholder='Enter a search term'
                    className='input'
                    onChange={(e) => setTerm(e.target.value)}
                />
            </form>
        </div>
    )
};
