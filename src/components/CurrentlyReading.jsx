import React from 'react';
// import PropTypes from 'prop-types';
import '../styles/category.css';
import Book from './Book';

const CurrentlyReading = props => {
	return (
		<>
			<div className='category-container'>
				<h2 className="category-title">Currently Reading</h2>
				<div className='books-shelf'>
				</div>
			</div>
		</>
	)
}

// CurrentlyReading.propTypes = {}

export default CurrentlyReading