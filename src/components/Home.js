import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import * as apiFunctions from "../API";
import Navbar from "./Navbar";
import Library from "./Library";
import Search from "./Search";

const Home = () => {
	const [result, setResult] = useState("");
	useEffect(() => {
		const getData = async () => {
			await apiFunctions.getAll().then((res) => setResult(res));
		};
		getData();
	}, [result]);
	return (
		<>
			<Navbar />
			<Library books={result} />
			<Link to='search'>
				<Search />
			</Link>
		</>
	);
};

export default Home;
