import React, {useEffect, useState} from 'react';
import Charecter from './Charecter';
import "./App.css";

function App() {

  // Setting API variables 
  const API_KEY = "a0d4592e698451e226ec10add7248626";

  // Creating a chars state to store the data from the API call (Array of objects)
  const [characters, setcharacters] = useState([]);
  // Creating the search state to store our search bar query to send to the API
  const [search, setSearch] = useState("");
  // This state only runs after the button is clicked to prevent the api being called on every keyup 
  const [query, setQuery] = useState("");

  // This function stops the page from reloading and sending multiple API calls, it also takes a
  // a second argument which tells it when to run according to which state is passed in.
  // In this case only after the submit button is hit  
  useEffect(() => {
    getChars();
  }, [query]);

  // Making our API call 
  // using await to make sure other functions dont run until we recieve our data 
  const getChars = async () => {
    const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&apikey=${API_KEY}`);
    const data = await response.json();
    // Setting the state variable to data
    setcharacters(data.data.results);
    console.log(data.data.results)
  }

  // This function saves the value of the onChange event 
  const updateSearch = e => {
    setSearch(e.target.value)
  }

  // This function calls the function that can change the data in our query state
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
    <div className='App'>
      <div className='logo-div'>
        <img className='marvel-logo' src="./marvel-logo-png-transparent.png" alt="" />
      </div>
      <form onSubmit={getSearch} className='search-form'>
        <input placeholder="Search for your favourite hero!" className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className='search-button' type='submit'>Search</button>
      </form>
      <div className='characters'>
        {characters.map(charecter => (
          <Charecter title={charecter.name} 
            image={charecter.thumbnail} 
            key={charecter.id}
            description={charecter.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;