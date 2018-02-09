import React, { Component } from 'react';
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Results from "./components/results/Results";
import SavedArticles from "./components/saved articles/SavedArticles";

class App extends Component {
  render(){
  return(
      <div className = "container" >
      <Navbar />
      <Search />
      <Results />
      <SavedArticles />
      </div>
    );
  }
}

export default App;
