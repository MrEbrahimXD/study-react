import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { useRef } from 'react';
import algoliasearch from 'algoliasearch';

const searchClient = algoliasearch(
  '0PXL3N9V1S',
  '627b1e63f6b9070eb434b5abaa271c3c'
);
// eslint-disable-next-line

const Hit = ({ hit }) => (
    <li tabIndex={0} className="result-container" onClick={hit.details.link}>
            <img src={hit.details.img} className="result-img" alt={hit.subject} />
            <div className="result-details">
                <h3 className="result-title">{hit.details.title}</h3>
                <p className="result-description">{hit.details.description}</p>
                <p className="result-poster">{hit.details.poster}</p>
                <p className="result-type">{hit.details.type}</p>
            </div>
        </li>
);

function SearchingBoxAlgolia() {
    const searchingBox = useRef(document.getElementById('input-field-algolia'));
    return (
        <InstantSearch
            searchClient={searchClient}
            indexName="thirdSecondary"
        >
            {console.log(searchingBox.current)}
            {searchingBox.current}
            <SearchBox target="input-field-algolia" />

            <Hits hitComponent={Hit} />
        </InstantSearch>

    );
}

export default SearchingBoxAlgolia;