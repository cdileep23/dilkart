import {IoIosSearch} from 'react-icons/io'
import ComponentItem from '../componentItem'
import RatingItem from '../ratingItem'
import './index.css'

const state = {
  activeCategory: '',
  activeRating: '',
  searchValInput: '',
}

const FiltersGroup = props => {
  console.log(state)
  const {categoryOptions, ratingsList, getActiveFilterDetails} = props
  const updateInputValue = event => {
    state.searchValInput = event.target.value
    getActiveFilterDetails({...state})
  }

  const updateActiveRating = rating => {
    state.activeRating = rating
    getActiveFilterDetails({...state})
  }

  const updateActiveCategory = category => {
    state.activeCategory = category
    getActiveFilterDetails({...state})
  }

  const clearFilters = () => {
    state.activeCategory = ''
    state.activeRating = ''
    getActiveFilterDetails({...state})
  }

  return (
    <div className="filters-group-container">
      <div className="filter-group-search-bar">
        <input
          placeholder="search"
          className="filter-group-input"
          type="search"
          onChange={updateInputValue}
        />
        <IoIosSearch />
      </div>
      <ul className="fg-category-list">
        <h1>Category</h1>

        {categoryOptions.map(e => (
          <ComponentItem
            updateActiveCategory={updateActiveCategory}
            isActive={state.activeCategory === e.categoryId}
            componentObj={e}
            key={e.categoryId}
          />
        ))}
      </ul>
      <ul className="fg-category-list">
        <h1>Rating</h1>
        {ratingsList.map(e => (
          <RatingItem
            updateActiveRating={updateActiveRating}
            ratingObj={e}
            isActiveRating={e.ratingId === state.activeRating}
            key={e.ratingId}
          />
        ))}
      </ul>
      {console.log(state)}

      <div>
        <button
          onClick={clearFilters}
          className="clear-filter-button"
          type="button"
        >
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default FiltersGroup
