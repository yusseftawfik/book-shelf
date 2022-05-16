import React from 'react';
// import PropTypes from 'prop-types';
import '../styles/category.css';
import Book from './Book';

const Read = props => {
	return (
		<>
			<div className='category-container'>
				<h2 className="category-title">Read</h2>
				<div className='books-shelf'>
				</div>
			</div>
		</>
	)
}

// Read.propTypes = {}

export default Read;