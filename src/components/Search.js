import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

const Search = () => {
    const [search, setSearch] = useState(null)
  return (
    <>
          <AsyncPaginate
              placeholder="Search for the city of your choice"
              debounceTimeout={600}
              value={search}
              onChange={handleChange}
          />
      </>
  )
}

export default Search