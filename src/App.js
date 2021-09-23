import './App.css';
import React, { useState, useEffect } from 'react'
import SearchArea from './SearchArea';
import Characters from './Characters';

function App() {
  const [data, setData] = useState([])
  const [searchName, setSearchName] = useState('')
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const apiURL = `https://rickandmortyapi.com/api/character/?name=${searchName}`

  function handleSubmit(e) {
    setData([]);
    setLoading(true);
    e.preventDefault();
    setSearchName(text);
  }

  useEffect(() => {
    fetch(apiURL)
      .then(res => {
        if (!res.ok) {
          throw Error("could not get data for that result ")
        }
        return res.json();
      } )
      .then(data => setData(data.results))
      .catch((err) => {
        setError(err.message); 
        setLoading(false);
      } )
    setLoading(false)

  }, [searchName])

  return (

    <div className='container max-w-7xl mx-auto'>

      <SearchArea setText={setText} handleSubmit={handleSubmit}/>
      {data && <Characters data={data}/>} 
      {loading && <div className="text-2xl text-center py-12 text-gray-900">Loading...</div>} 
      {error && <div className="text-3xl text-center py-12 text-red-900">{error}</div>}
    </div>  
  );
}

export default App;
