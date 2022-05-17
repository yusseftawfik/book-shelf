import React from 'react';
import '../styles/category.css';

const Search = ({ showSearchPage }) => {
	return (
		<>
			<div className='search-btn' onClick={() => showSearchPage(true)}>
			</div>
		</>
	)
}

export default Search