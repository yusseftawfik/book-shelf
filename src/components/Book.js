import React from "react";
import { Link } from "react-router-dom";
import * as apiFunctions from "../API";
import "../styles/book.css";

const Book = ({ data }) => {
	const updateBook = (book, shelf) => {
		apiFunctions.update(book, shelf);
	};
	return (
		<>
			<div className="book">
				{data && (
					<>
						<div className="book-top">
							{data.imageLinks ? (
								<Link to={`book/${data.id}`}>
									<div
										className="book-cover"
										style={{
											backgroundImage: `url(${data.imageLinks.smallThumbnail})`,
										}}
									></div>
								</Link>
							) : (
								<Link to={`book/${data.id}`}>
									<div className="no-photo">No Book Cover</div>
								</Link>
							)}
							<div className="book-shelf-changer">
								<select
									defaultValue={data.shelf ? data.shelf : "none"}
									onChange={e => updateBook(data, e.target.value)}
								>
									<option value="none" disabled>
										Move to...
									</option>
									<option value="none">None</option>
									<option value="currentlyReading">Currently Reading</option>
									<option value="wantToRead">Want to Read</option>
									<option value="read">Read</option>
								</select>
							</div>
						</div>
						<div className="book-bottom">
							<div className="book-title">{data.title}</div>
							<div className="book-authors">
								{data.authors ? data.authors.join(" & ") : null}
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Book;
