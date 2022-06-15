import React from "react";
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Library from "./Library";
import Search from "./Search";

const Home = ({ books, updateBook }) => {
	return (
		<>
			<Navbar />
			<Library books={books} updateBook={updateBook} />
			<Link to='/book-shelf/search'>
				<Search />
			</Link>
		</>
	);
};

Home.prototype = {
	books: PropTypes.array.isRequired,
	updateBook: PropTypes.func.isRequired,
}

export default Home;
