import React from 'react';
import Shelf from './Shelf';

const Library = ({ books }) => {
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

export default Library;