import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {

    }

    const handleChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
     }
  return (
    <>
          <AsyncPaginate
              placeholder="Search for the city of your choice"
              debounceTimeout={600}
              value={search}
              onChange={handleChange}
              loadOptions={loadOptions}
          />
      </>
  )
}

export default Search