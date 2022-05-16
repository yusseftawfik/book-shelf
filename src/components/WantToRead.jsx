import React from 'react';
// import PropTypes from 'prop-types';
import '../styles/category.css';
import Book from './Book';

const WantToRead = props => {
	return (
		<>
			<div className='category-container'>
				<h2 className="category-title">Want to Read</h2>
				<div className='books-shelf'>
				</div>
			</div>
		</>
	)
}

// wantToRead.propTypes = {}

export default WantToRead;