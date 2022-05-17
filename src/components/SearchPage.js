import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as apiFunctions from '../API';
import Book from './Book';
import '../styles/searchpage.css';

const SearchPage = () => {
	const [query, setQuery] = useState('');
	const [queryResult, setQueryResult] = useState('');
	useEffect(() => {
		const getQuery = async () => {
			await apiFunctions.search(query, 50).then((res) => setQueryResult(res));
		};
		getQuery();
	}, [query]);
	const showAll = async () => {
		setQueryResult('');
		setQuery('');
	};
	return (
		<>
			<div className='search-navbar'>
				<Link to='home'>
					<div className='back-btn'></div>
				</Link>
				<input
					type='text'
					placeholder='Search by title, author, or ISBN'
					onChange={(e) => setQuery(e.target.value)}
					value={query}
				/>
			</div>
			<div className='search-result'>
				{queryResult && queryResult.error ? (
					<div className='no-result'>
						No result Found
						<button onClick={() => showAll()}>SHOW ALL</button>
					</div>
				) : queryResult ? (
					queryResult.map((book, index) => <Book key={index} data={book} />)
				) : (
					<>
						<div className='no-result'>
							Search for a book!
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default SearchPage;
