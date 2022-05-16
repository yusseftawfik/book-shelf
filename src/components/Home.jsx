import React from 'react';
import CurrentlyReading from "./CurrentlyReading";
import Navbar from "./Navbar";
import Read from "./Read";
import Search from "./Search";
import WantToRead from "./WantToRead";

const Home = () => {
	return (
		<>
			<Navbar />
			<CurrentlyReading />
			<WantToRead />
			<Read />
			<Search />
		</>
	)
}

export default Home