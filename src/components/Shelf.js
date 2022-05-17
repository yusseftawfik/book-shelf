import React from "react";
import { PropTypes } from 'prop-types';
import Book from "./Book";
import "../styles/category.css";

const Shelf = ({ books, category, status, updateBook }) => {
	return (
		<>
			<div className="category-container">
				<h2 className="category-title">{category}</h2>
				<div className="books-shelf">
					{books &&
						books
							.filter((book) => book.shelf === status)
							.map((book, index) => <Book data={book} key={index} updateBook={updateBook} />)}
				</div>
			</div>
		</>
	);
};

Shelf.propTypes = {
	books: PropTypes.array.isRequired,
	category: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	updateBook: PropTypes.func.isRequired,
}

export default Shelf;
