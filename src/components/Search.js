import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from './Api'

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            geoApiOptions
        )
            .then((response) => response.json())
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
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