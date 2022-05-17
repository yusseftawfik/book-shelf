import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import * as apiFunctions from "../API";
import Book from "./Book";
import "../styles/searchpage.css";

const SearchPage = ({ books, updateBook }) => {
	const [query, setQuery] = useState("");
	const [queryResult, setQueryResult] = useState("");
	useEffect(() => {
		const getQuery = async () => {
			await apiFunctions.search(query, 50).then((res) => setQueryResult(res));
		};
		getQuery();
	}, [query]);
	return (
		<>
			<div className="search-navbar">
				<Link to="/">
					<div className="back-btn"></div>
				</Link>
				<input
					type="text"
					placeholder="Search by title, author, or ISBN"
					onChange={(e) => setQuery(e.target.value)}
					value={query}
				/>
			</div>
			<div className="search-result">
				{queryResult && queryResult.error ? (
					<div className="no-result">No result Found</div>
				) : queryResult ? (
					queryResult.map((book, index) => {
						const shelf = books.find((old) => old.title === book.title);
						return shelf ? (
							<Book key={index} data={shelf} updateBook={updateBook} />
						) : (
							<Book key={index} data={book} updateBook={updateBook} />
						);
					})
				) : (
					<>
						<div className="no-result">Search for a book!</div>
					</>
				)}
			</div>
		</>
	);
};

SearchPage.prototype = {
	books: PropTypes.array.isRequired,
	updateBook: PropTypes.func.isRequired,
};

export default SearchPage;
