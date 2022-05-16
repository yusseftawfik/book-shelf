import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as apiFunctions from "../API";
import Spinner from "./spinner";
import back from "../assets/arrow-back.svg";
import "../styles/bookdetails.css";

export const BookDetails = () => {
	const [book, setBook] = useState("");
	const id = useParams();
	useEffect(() => {
		const getBook = async () => {
			await apiFunctions.get(id.id).then((res) => setBook(res));
		};
		getBook();
	}, [id]);
	return (
		<>
			<div className="search-navbar">
				<Link to="/search">
					<img src={back} alt="back" width="50" height="35" />
				</Link>
				<div className="categories">
					{book.categories ? book.categories.map((category) => category) : null}
				</div>
			</div>
			<div className="book-details-container">
				<div className="book-details">
					{book ? (
						<>
							<div className="top">
								<div className="title">{book.title}</div>
							</div>
							<div className="bottom">
								<a href={book.previewLink}>
									<div className="bookcover">
										<img
											src={book.imageLinks.thumbnail}
											alt="book-cover"
											width="150"
											height="250"
										/>
										<div className="rate">
											{book.averageRating ? book.averageRating : "NA"}
										</div>
										<div className="language">{book.language}</div>
										<div className="pages">{book.pageCount} page</div>
									</div>
								</a>
								<div className="author">
									by:
									{book.authors
										? book.authors.map((author) => {
											return (
												<>
													{author}
													<br />
												</>
											);
										})
										: null}
								</div>
							</div>
							<div className="footer">
								<div className="description">{book.description}</div>
								<div className="publisher">
									{book.publisher ? `puplished by: ${book.publisher}` : null}
								</div>
								<div className="date">{book.publishedDate}</div>
							</div>
						</>
					) : (
						<Spinner />
					)}
				</div>
			</div>
		</>
	);
};
