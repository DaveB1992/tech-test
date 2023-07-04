import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
    if (!results.length) {
        return <p className="results-message">No Results</p>
      }else {
    return (
        <>
            <p className="title">Search Results</p>
            <div className="image-container">
        {results.map((image) => (
            <img className="card-image"  src="{image}" alt="spaceImage"/>
        ))}
        </div>
        </>
    )
}
}

export default SearchResults;