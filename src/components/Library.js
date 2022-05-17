import React from 'react';
import { PropTypes } from 'prop-types';
import Shelf from './Shelf';

const Library = ({ books, updateBook }) => {
	return (
		<>
			<Shelf
				books={books}
				category={'Currently Reading'}
				status={'currentlyReading'}
			/>
			<Shelf
				books={books}
				category={'Want to Read'}
				status={'wantToRead'}
			/>
			<Shelf
				books={books}
				category={'Read'}
				status={'read'}
			/>
		</>
	)
}

Library.prototype = {
	books: PropTypes.array.isRequired
}

export default Library;