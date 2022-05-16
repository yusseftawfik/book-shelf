import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'
import "../styles/book.css";

const Book = ({ data }) => {
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
								<select>
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
								{data.authors
									? data.authors.map((author) => {
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
					</>
				)}
			</div>
		</>
	);
};

// Book.propTypes = {}

export default Book;
