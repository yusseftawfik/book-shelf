import React from 'react';
import { PropTypes } from 'prop-types';
import Shelf from './Shelf';

const Library = ({ books, updateBook }) => {
	return (
		<>
			<Shelf
				books={books}
				updateBook={updateBook}
				category={'Currently Reading'}
				status={'currentlyReading'}
			/>
			<Shelf
				books={books}
				updateBook={updateBook}
				category={'Want to Read'}
				status={'wantToRead'}
			/>
			<Shelf
				books={books}
				updateBook={updateBook}
				category={'Read'}
				status={'read'}
			/>
		</>
	)
}

Library.prototype = {
	books: PropTypes.array.isRequired,
	updateBook: PropTypes.func.isRequired,
}

export default Library;