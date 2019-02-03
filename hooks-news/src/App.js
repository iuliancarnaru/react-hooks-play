import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function App() {

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('react hooks');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  const searchInputRef = useRef();

  useEffect(() => {
    getDataFromApi();
  },[])

  // [] acts as component mount and unmount , not update (to run update insert upated value between [])

  const getDataFromApi = async () => {
    setLoading(true);

    try {
      const response = await axios
        .get(`http://hn.algolia.com/api/v1/search?query=${query}`);
      setResults(response.data.hits)
    } catch (error) {
      setError(error)
    }

    setLoading(false);
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
    <div className="container max-w-md mx-auto p-4 m-2 bg-purple-lightest shadow-lg rounded">
    <img src="https://icon.now.sh/react/c00" alt="React Logo" className="float-right h-12"></img>
    <h1 className="text-grey-darkest font-thin">Hooks news</h1>
      <form className="mb-2" onSubmit={handleSearch}>
      
        <input type="text" onChange={event => setQuery(event.target.value)} value={query} ref={searchInputRef} className="border p-1 rounded"/>
        <button type="submit" className="bg-orange rounded m-1 p-1">Search</button>
        <button type="button" className="bg-teal rounded m-1 p-1" onClick={handleClearSearch}>Clear</button>
      </form>

      {loading ? (
        <div className="font-bold text-orange-dark">Loading results... Please be patient!</div>
        ) : (<ul className="list-reset leading-normal">
      {results.map(result => (
        <li key={result.objectID}>
          <a href={result.url} className="text-indigo-dark hover:text-indigo-darkest">{result.title}</a>
        </li>
      ))}
      </ul>)}

      { error && <div className="text-red font-bold">{error.message}</div>}
    </div>
  )
}