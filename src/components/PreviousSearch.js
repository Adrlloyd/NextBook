import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{ faSearch } from "@fortawesome/free-solid-svg-icons"

export default function PreviousSearch(){
  const searches = ['greek', 'fiction', 'myth', 'horror', "stephen king", "best"]

  return(
    <div>
      <div className="previous-searches section">
        <h2>Previous Searches</h2>
        <div className="ps-container">
          {searches.map(search => (<div className="search-item">
            {search}
          </div>))}
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="btn"><FontAwesomeIcon icon={faSearch} /> </button>
        </div>
      </div>
    </div>
  )
}