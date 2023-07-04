import React from "react";
import { render } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe('SearchResults', () => {
    const validProps = {
        SearchResults: ["mock-url-1", "mock-url-2"]
    }
    it("renders correctly", () =>{
        const { asFragment } = render(
            <SearchResults results ={validProps.SearchResults} />
        )
        expect(asFragment()).toMatchSnapshot();
    })
})