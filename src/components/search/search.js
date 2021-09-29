import React from 'react'
import './search.css'

function Search({placeholder, handleChange}) {
  return (
		<div className='search'>
			<input
				type='search'
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</div>
	);
}

export default Search
