//Create a new component

import React from 'react';
import ReactDOM  from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBL6mZr3jd2Rjk4xwFMePRs_54IVVznIJI';
//Put it in a DOM

const App = () => {
    return <div>
        <SearchBar />
    </div>
    
}

ReactDOM.render(<App />, document.querySelector('.container'))