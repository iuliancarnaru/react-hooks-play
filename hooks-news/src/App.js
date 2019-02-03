import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('reacthooks')

  useEffect(() => {
    getDataFromApi();
  },[query])

  // [] acts as component mount and unmount , not update (to run update insert upated value between [])

  const getDataFromApi = async () => {
    const response = await axios
      .get(`http://hn.algolia.com/api/v1/search?query=${query}`);
    setResults(response.data.hits)
  }

  return(
    <>
      <input type="text" onChange={event => setQuery(event.target.value)}/>
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