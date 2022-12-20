import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch';
import './AlgoliaSearch.css';


const searchClient = algoliasearch(
    '0PXL3N9V1S',
    '627b1e63f6b9070eb434b5abaa271c3c'
  );



  const Hit = ({ hit }) => (
    
    <div
      tabIndex={0}
      className="result-container"
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
    </div>

  );

  

export default function AlgoliaSearch() {

    return (
        <>
         <InstantSearch searchClient={searchClient} indexName="thirdSecondary">
      <SearchBox target="input-field-algolia" inputId='input-field-algolia' />
      <div className="results">
        <h2>البيانات</h2>
        <ul id="results-container">
          <Hits hitComponent={Hit}  />
        </ul>
        <h2>الشائع</h2>
        <ul style={{marginBottom: '1em'}}>
          <li tabIndex={0} className="tag">المصادر</li>
          <li tabIndex={0} className="tag">سياسةالخصوصية</li>
          <li tabIndex={0} className="tag">حقوق النشر</li>
        </ul>
      </div>
    </InstantSearch>
        <div className="tag-results">
          <button className="back"><i className="material-icons">arrow_back</i></button>
          <span className="selected-tag">storymapping</span>
          <ul>
            <li tabIndex={0}>AngularJS</li>
            <li tabIndex={0}>ReactJS</li>
            <li tabIndex={0}>Browserify</li>
          </ul>
        </div>{/* end .tag-results */}
        </>
    );
}