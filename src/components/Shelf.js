import React from "react";
import Book from "./Book";
import "../styles/category.css";

const Shelf = ({ books, category, status }) => {
	return (
		<>
			<div className="category-container">
				<h2 className="category-title">{category}</h2>
				<div className="books-shelf">
					{books &&
						books
							.filter((book) => book.shelf === status)
							.map((book, index) => <Book data={book} key={index} />)}
				</div>
			</div>
		</>
	);
};

export default Shelf;
