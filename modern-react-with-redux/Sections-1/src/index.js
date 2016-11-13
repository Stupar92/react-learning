// Create new component. This component should produce some HTML
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';

const API_KEY = "AIzaSyDx2f98jiKeF1te6HJsi6ttAbxxh_kF-mw";

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

//Comonent needs to be inserted into the DOM
ReactDOM.render(<App />, document.querySelector(".container"));

// @TODO the following is not working, find out why:
// This does not work: ReactDOM.render(<App />, $(".container"))
// This does work: ReactDOM.render(<App />, document.querySelector(".container"));