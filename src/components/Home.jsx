import React, { useEffect, useState } from "react";
import * as apiFunctions from "../API";
import SearchPage from "./SearchPage";
import Navbar from "./Navbar";
import Library from "./Library";
import Search from "./Search";

const Home = () => {
	const [search, setSearch] = useState(false);
	const [result, setResult] = useState("");
	const showSearchPage = (value) => {
		setSearch(value);
	};
	useEffect(() => {
		const getData = async () => {
			await apiFunctions.getAll().then((res) => setResult(res));
		};
		getData();
	}, [result]);
	return (
		<>
			{search ? (
				<SearchPage showSearchPage={showSearchPage} />
			) : (
				<>
					<Navbar />
					<Library books={result} />
					<Search showSearchPage={showSearchPage} />
				</>
			)}
		</>
	);
};

export default Home;
