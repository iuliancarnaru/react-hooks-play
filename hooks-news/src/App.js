import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function App() {

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('react hooks');
  const searchInputRef = useRef();

  useEffect(() => {
    getDataFromApi();
  },[])

  // [] acts as component mount and unmount , not update (to run update insert upated value between [])

  const getDataFromApi = async () => {
    const response = await axios
      .get(`http://hn.algolia.com/api/v1/search?query=${query}`);
    setResults(response.data.hits)
  }

  const handleSearch = event => {
    event.preventDefault();
    getDataFromApi();
  }

  const handleClearSearch = () => {
    setQuery("");
    searchInputRef.current.focus();
  }

  // Refs give us a way to access the react elements created in the render method

  return(
    <>
      <form onSubmit={handleSearch}>
      
        <input type="text" onChange={event => setQuery(event.target.value)} value={query} ref={searchInputRef}/>
        <button type="submit">Search</button>
        <button type="button" onClick={handleClearSearch}>Clear</button>
      </form>

      <ul style={{listStyle: 'none'}}>
      {results.map(result => (
        <li key={result.objectID}>
          <a href={result.url}>{result.title}</a>
        </li>
      ))}
      </ul>
    </>
  )
}