import React from 'react';
import { PropTypes } from 'prop-types';
import '../styles/category.css';

const Search = ({ showSearchPage }) => {
	return (
		<>
			<div className='search-btn' onClick={() => showSearchPage(true)}>
			</div>
		</>
	)
}

Search.prototype = {
	showSearchPage: PropTypes.func.isRequired
}

export default Search