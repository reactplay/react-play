import React,{useState} from 'react';

function SearchBar(props) {
    const [searchValue, setSearchValue] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        props.handleSearch(searchValue)
    }
    return(
        <div className='ui segment'>
            <form onSubmit={onSubmit} className='ui form'>
                <label>Video Search</label>
                <input type='text' value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
            </form>
        </div>
    )

}

export default SearchBar;