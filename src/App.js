import React from 'react'
import { useState } from 'react'
import Products from './Products';
export default function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "a709611f";
  const YOUR_APP_KEY = "100b15b1d8cb6a8f9b137ab6b0a9eb36";
  const submitHandler = e => {
    e.preventDefault();
    // console.log(search);
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(data => setData(data.hits))
  }

  return (
    <div>
      <center>
        <h2>Food Recepie App</h2>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} /> <br /><br />
          <input type="submit" className="btn btn-primary" value="search" />
        </form>
        {data.length >= 1 ? <Products /> : null}
      </center>
    </div>
  )
}
