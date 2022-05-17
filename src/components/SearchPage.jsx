import React, { useState, useEffect } from "react";
import * as apiFunctions from "../API";
import Book from "./Book";
import Spinner from "./spinner";
import "../styles/searchpage.css";

const SearchPage = ({ showSearchPage }) => {
	const [result, setResult] = useState("");
	const [query, setQuery] = useState("");
	const [queryResult, setQueryResult] = useState(result);
	useEffect(() => {
		const getData = async () => {
			await apiFunctions.getAll().then((res) => setResult(res));
		};
		getData();
	}, []);
	useEffect(() => {
		const getQuery = async () => {
			await apiFunctions.search(query, 50).then((res) => setQueryResult(res));
		};
		getQuery();
	}, [query]);
	const showAll = async () => {
		setQueryResult(result);
		setQuery("");
	};
	return (
		<>
			<div className="search-navbar">
				<div onClick={() => showSearchPage(false)} className="back-btn"></div>
				<input
					type="text"
					placeholder="Search by title, author, or ISBN"
					onChange={(e) => setQuery(e.target.value)}
					value={query}
				/>
			</div>
			<div className="search-result">
				{queryResult && queryResult.error ? (
					<div className="no-result">
						No result Found
						<button onClick={() => showAll()}>SHOW ALL</button>
					</div>
				) : queryResult ? (
					queryResult.map((book, index) => <Book key={index} data={book} />)
				) : result ? (
					result.map((book, index) => <Book key={index} data={book} />)
				) : (
					<Spinner />
				)}
			</div>
		</>
	);
};

export default SearchPage;
