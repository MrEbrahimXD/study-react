import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch';
import './AlgoliaSearch.css';


const searchClient = algoliasearch(
    '0PXL3N9V1S',
    '627b1e63f6b9070eb434b5abaa271c3c'
);

const Hit = ({ hit }) => (

    <a
        tabIndex={0}
        className="result-container"
        href={hit.details.link}
    >
        <img
            src={hit.details.img}
            className="result-img"
            alt={hit.subject}
        />
        <div className="result-details">
            <h3 className="result-title">{hit.details.title}</h3>
            <p className="result-description">{hit.details.description}</p>
            <p className="result-poster">{hit.details.poster}</p>
            <p className="result-type">{hit.details.type}</p>
        </div>
    </a>

);



export default function AlgoliaSearch() {

    return (
        <InstantSearch searchClient={searchClient} indexName="thirdSecondary">
            <SearchBox target="input-field-algolia" inputId='input-field-algolia' />
            <div className="results">
                <h2>البيانات</h2>
                <ul id="results-container">
                    <Hits hitComponent={Hit} />
                </ul>
                <h2>تفاصيل</h2>
                <ul style={{ marginBottom: '1em', marginTop: "2em" }}>
                    <li tabIndex={0} className="tag">سياسة الخصوصية</li>
                    <li tabIndex={0} className="tag">حقوق النشر</li>
                </ul>
            </div>
        </InstantSearch>
    );
}